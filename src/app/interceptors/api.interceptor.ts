import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE_URL = 'http://localhost:3000';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> { // tslint:disable-line:no-any
    return req.url.startsWith('/') ?
      next.handle(req.clone({url: `${API_BASE_URL}${req.url}`})) :
      next.handle(req);
  }
}
