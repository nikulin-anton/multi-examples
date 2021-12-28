import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { APP_NAME_TOKEN } from '../../tokens/app-name.token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(@Inject(APP_NAME_TOKEN) readonly appName: string) {}
}
