import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityItem } from '../interfaces/activity-item';

@Injectable({ providedIn: 'root' })
export class BoredApiService {
  private readonly URL = 'https://www.boredapi.com/api';

  constructor(private readonly httpClient: HttpClient) {}

  getActivities(): Observable<ActivityItem[]> {
    return this.httpClient.get<ActivityItem[]>(`${this.URL}/activity`);
  }
}
