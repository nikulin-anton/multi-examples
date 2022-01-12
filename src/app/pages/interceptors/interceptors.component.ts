import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BoredApiService } from 'src/app/services/bored.api.service';

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterceptorsComponent {
  constructor(private readonly boredApiService: BoredApiService) {}

  sendRequest() {
    this.boredApiService.getActivities().subscribe((result) => {
      console.log(result);
    });
  }
}
