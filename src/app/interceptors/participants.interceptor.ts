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
export class ParticipantsInterceptor implements HttpInterceptor {
  constructor(private readonly requestStepsService: RequestStepsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const updatedReq = req.clone({ params: req.params.set('participants', 2) });

    this.requestStepsService.addStep(
      'Добавили к запросу параметр participants=2'
    );

    return next.handle(updatedReq);
  }
}
