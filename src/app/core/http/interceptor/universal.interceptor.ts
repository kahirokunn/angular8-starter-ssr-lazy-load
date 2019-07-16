import { Injectable, Inject, Optional } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Request } from 'express';
import { REQUEST } from '@nguniversal/express-engine/tokens';

@Injectable()
export class UniversalInterceptor implements HttpInterceptor {

  constructor(@Optional() @Inject(REQUEST) protected request: Request) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let serverReq = req;
    // request urlがhttpから始まる場合、uriが既に完成しているのでスキップ
    if (req.url.startsWith('http')) {
      return next.handle(serverReq);
    }
    // request urlが/から始まらない場合、相対パスになってまずいので先頭に/をつけて絶対パスにする
    if (this.request) {
      let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
      if (!req.url.startsWith('/')) {
        newUrl += '/';
      }
      newUrl += req.url;
      serverReq = req.clone({ url: newUrl });
    }
    return next.handle(serverReq);
  }
}
