import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { map, Subject, tap } from 'rxjs';
import { ActivityItem } from 'src/app/interfaces/activity-item';
import { BoredApiService } from './services/bored.api.service';
import { RequestStepsService } from './services/request-steps.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent implements OnDestroy {
  readonly steps$ = this.requestStepsService.steps$;
  readonly result$ = new Subject<ActivityItem[]>();

  constructor(
    private readonly boredApiService: BoredApiService,
    private readonly requestStepsService: RequestStepsService
  ) {}

  sendRequest() {
    this.requestStepsService.clearSteps();

    this.boredApiService
      .getActivities()
      .pipe(
        tap(() => this.requestStepsService.addStep('Обработали результат')),
        map((result) => this.result$.next(result)),
        tap(() => this.requestStepsService.addStep('Вывели'))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.requestStepsService.clearSteps();
  }
}
