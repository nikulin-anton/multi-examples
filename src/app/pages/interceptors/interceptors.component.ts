import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { BoredApiService } from './services/bored.api.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent {
  private readonly steps: string[] = [];
  readonly steps$ = new Subject<string[]>();

  constructor(private readonly boredApiService: BoredApiService) {}

  sendRequest() {
    this.addStep('Отправили запрос');

    this.boredApiService
      .getActivities()
      .pipe(tap(() => this.addStep('Получили ответ')))
      .subscribe((result) => {
        console.log(result);
      });
  }

  private addStep(step: string) {
    this.steps.push(step);
    this.steps$.next(this.steps);
  }
}
