import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Subject, tap } from 'rxjs';
import { BoredApiService } from './services/bored.api.service';
import { RequestStepsService } from './services/request-steps.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent {
  readonly steps$ = this.requestStepsService.steps$;

  constructor(
    private readonly boredApiService: BoredApiService,
    private readonly requestStepsService: RequestStepsService
  ) {}

  sendRequest() {
    this.requestStepsService.clearSteps();

    this.boredApiService.getActivities().subscribe((result) => {
      console.log(result);
    });
  }
}
