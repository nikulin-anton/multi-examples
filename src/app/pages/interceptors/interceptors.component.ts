import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { ActivityItem } from 'src/app/interfaces/activity-item';
import { BoredApiService } from '../../services/bored.api.service';
import { RequestStepsService } from '../../services/request-steps.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent implements OnDestroy {
  readonly steps$ = this.requestStepsService.steps$;
  readonly result$ = new Subject<ActivityItem[]>();
  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly boredApiService: BoredApiService,
    private readonly requestStepsService: RequestStepsService
  ) {}

  sendRequest() {
    this.requestStepsService.clearSteps();
    this.isLoading$.next(true);

    this.boredApiService
      .getActivities()
      .pipe(
        map((result) => this.result$.next(result)),
        tap(() => this.requestStepsService.addStep('Вывели результат')),
        tap(() => this.isLoading$.next(false))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.requestStepsService.clearSteps();
  }
}
