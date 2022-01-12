import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RequestStepsService } from '../services/request-steps.service';

@Injectable()
export class TypeInterceptor implements HttpInterceptor {
  constructor(private readonly requestStepsService: RequestStepsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedReq = req.clone({ params: req.params.set('type', 'social') });

    this.requestStepsService.addStep('Добавили к запросу параметр type=social');

    return next.handle(updatedReq);
  }
}
