import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { tap } from 'rxjs/operators';

const STATE_KEY_PREFIX = 'http_get_requests:';
const COUNT_REQUEST = {};

function keyFactory(req: HttpRequest<any>) {
  let baseKey = `${STATE_KEY_PREFIX}|${req.url}`
  COUNT_REQUEST[baseKey] = (COUNT_REQUEST[baseKey] || 0) + 1
  baseKey = `${baseKey}|${COUNT_REQUEST[baseKey]}`
  // ${prefix}|${url}|${count}
  return makeStateKey<HttpResponse<any>>(baseKey)
}

@Injectable()
export class TransferHttpResponseInterceptor implements HttpInterceptor {
  constructor(
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: string
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.method !== 'GET') {
      return next.handle(req);
    }
    const key = keyFactory(req);

    if (isPlatformBrowser(this.platformId)) {
      return this.browserIntercepter(key, req, next)
    }

    if (isPlatformServer(this.platformId)) {
      return this.serverIntercepter(key, req, next)
    }
  }

  private browserIntercepter(key: ReturnType<typeof makeStateKey>, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cachedResponse = this.transferState.get(key, null);
    if (cachedResponse) {
      this.transferState.remove(key);
      return of(new HttpResponse({
        body: cachedResponse.body,
        status: 200,
        statusText: 'OK (from server)',
      }));
    } else {
      return next.handle(req);
    }
  }

  private serverIntercepter(key: ReturnType<typeof makeStateKey>, req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(tap(event => {
      if (event instanceof HttpResponse && event.status == 200) {
        const response = {
          body: event.body
        };
        this.transferState.set(key, response);
      }
    }));
  }
}
