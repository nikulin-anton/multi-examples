import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { Link } from 'src/app/interfaces/link';
import { MAIN_LINKS_TOKEN } from 'src/app/tokens/main-links.token';
import { APP_NAME_TOKEN } from '../../tokens/app-name.token';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  constructor(
    @Inject(APP_NAME_TOKEN) readonly appName: string,
    @Inject(MAIN_LINKS_TOKEN) readonly mainLinks: Link[]
  ) {}
}
