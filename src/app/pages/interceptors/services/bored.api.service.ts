import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ActivityItem } from '../../../interfaces/activity-item';
import { RequestStepsService } from './request-steps.service';

@Injectable()
export class BoredApiService {
  private readonly URL = 'https://www.boredapi.com/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly requestStepsService: RequestStepsService
  ) {}

  getActivities(): Observable<ActivityItem[]> {
    this.requestStepsService.addStep('Отправили запрос');

    return this.httpClient
      .get<ActivityItem[]>(`${this.URL}/activity`)
      .pipe(tap(() => this.requestStepsService.addStep('Получили ответ')));
  }
}
