import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Subject, tap } from 'rxjs';
import { ActivityItem } from '../../interfaces/activity-item';
import { BoredApiService } from '../../services/bored.api.service';
import { StepsService } from '../../services/steps.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent implements OnDestroy {
  readonly steps$ = this.stepsService.steps$;
  readonly result$ = new Subject<ActivityItem[]>();
  readonly isLoading$ = new BehaviorSubject<boolean>(false);

  constructor(
    private readonly boredApiService: BoredApiService,
    private readonly stepsService: StepsService
  ) {}

  sendRequest() {
    this.stepsService.clearSteps();
    this.isLoading$.next(true);

    this.boredApiService
      .getActivities()
      .pipe(
        map((result) => this.result$.next(result)),
        tap(() => this.stepsService.addStep('Вывели результат')),
        tap(() => this.isLoading$.next(false))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.stepsService.clearSteps();
  }
}
