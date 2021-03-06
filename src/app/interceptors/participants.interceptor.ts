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
    const NAME = 'participants';
    const VALUE = 2;
    const stepValue = `Добавили к запросу параметр ${NAME}=${VALUE}`;
    const updatedReq = req.clone({ params: req.params.set(NAME, VALUE) });

    this.requestStepsService.addStep(stepValue);

    return next.handle(updatedReq);
  }
}
