import { Inject, Injectable, PLATFORM_ID, ApplicationRef } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { tap, filter, take } from 'rxjs/operators';

const STATE_KEY_PREFIX = 'http_requests:' as const;

interface TransferHttpResponse {
  body?: any | null;
  headers?: { [k: string]: string[] };
  status?: number;
  statusText?: string;
  url?: string;
}

function getHeadersMap(headers: HttpHeaders) {
  const headersMap: { [name: string]: string[] } = {};
  for (const key of headers.keys()) {
    headersMap[key] = headers.getAll(key);
  }
  return headersMap;
}

@Injectable()
export class TransferHttpResponseInterceptor implements HttpInterceptor {

  private isCacheActive = true;
  private countRequest: { [key: string]: number } = {};

  constructor(
    appRef: ApplicationRef,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: string
  ) {
    appRef.isStable
      .pipe(
        filter((isStable: boolean) => isStable),
        take(1)
      )
      .toPromise()
      .then(() => { this.isCacheActive = false; });
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isCacheActive || req.method !== 'GET') {
      return next.handle(req);
    }
    const key = this.makeCacheKey(req.url, req.params);

    if (isPlatformBrowser(this.platformId)) {
      return this.browserIntercepter(key, req, next);
    }

    if (isPlatformServer(this.platformId)) {
      return this.serverIntercepter(key, req, next);
    }
  }

  private browserIntercepter(key: ReturnType<typeof makeStateKey>, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (this.transferState.hasKey(key)) {
      const response = this.transferState.get(key, {} as TransferHttpResponse);
      this.transferState.remove(key);
      return of(new HttpResponse({
        body: response.body,
        headers: new HttpHeaders(response.headers),
        status: response.status,
        statusText: response.statusText,
        url: response.url,
      }));
    } else {
      return next.handle(req);
    }
  }

  private serverIntercepter(key: ReturnType<typeof makeStateKey>, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse && event.status === 200) {
        this.transferState.set(key, {
          body: event.body,
          headers: getHeadersMap(event.headers),
          status: event.status,
          statusText: event.statusText,
          url: event.url,
        });
      }
    }));
  }

  private makeCacheKey(url: string, params: HttpParams) {
    const encodedParams = params.keys().sort().map(k => `${k}=${params.get(k)}`).join('&');
    let key = `${STATE_KEY_PREFIX}.'GET.'${url}?${encodedParams}`;
    this.countRequest[key] = (this.countRequest[key] || 1);
    key = `${key}|${this.countRequest[key]}`;
    return makeStateKey<TransferHttpResponse>(key);
  }
}
