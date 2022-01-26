import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StepsService } from '../services/steps.service';

@Injectable()
export class ParticipantsInterceptor implements HttpInterceptor {
  constructor(private readonly stepsService: StepsService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const NAME = 'participants';
    const VALUE = 2;
    const stepValue = `Добавили к запросу параметр ${NAME}=${VALUE}`;
    const updatedReq = req.clone({ params: req.params.set(NAME, VALUE) });

    this.stepsService.addStep(stepValue);

    return next.handle(updatedReq);
  }
}
