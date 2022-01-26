import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StepsComponent {
  @Input() steps$: Observable<string[]> = new Subject();
}
