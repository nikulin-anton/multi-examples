import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable()
export class RequestStepsService {
  readonly steps$ = new ReplaySubject<string[]>();
  private readonly steps: string[] = [];

  addStep(step: string) {
    this.steps.push(step);
    this.steps$.next(this.steps);
  }

  clearSteps() {
    this.steps.splice(0);
    this.steps$.next(this.steps);
  }
}
