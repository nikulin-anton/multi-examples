import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ActivityItem } from '../interfaces/activity-item';
import { StepsService } from './steps.service';

@Injectable()
export class BoredApiService {
  private readonly URL = 'https://www.boredapi.com/api';

  constructor(
    private readonly httpClient: HttpClient,
    private readonly stepsService: StepsService
  ) {}

  getActivities(): Observable<ActivityItem[]> {
    this.stepsService.addStep('Отправили запрос');

    return this.httpClient
      .get<ActivityItem[]>(`${this.URL}/activity`)
      .pipe(tap(() => this.stepsService.addStep('Получили ответ')));
  }
}
