import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class BoredApiService {
  private readonly URL = 'https://www.boredapi.com/api';

  constructor(private readonly httpClient: HttpClient) {}

  getActivities() {
    this.httpClient.get(`${this.URL}/activity`);
  }
}
