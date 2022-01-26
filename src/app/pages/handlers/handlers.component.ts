import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnDestroy,
} from '@angular/core';
import { StepsService } from '../../services/steps.service';
import { CLICK_HANDLER_TOKEN } from './tokens/click-handler.token';

@Component({
  selector: 'app-handlers',
  templateUrl: './handlers.component.html',
  styleUrls: ['./handlers.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: CLICK_HANDLER_TOKEN,
      useValue: () => console.log('Обработчик из HandlersComponent'),
      multi: true,
    },
  ],
})
export class HandlersComponent implements OnDestroy {
  readonly steps$ = this.stepsService.steps$;

  constructor(
    @Inject(CLICK_HANDLER_TOKEN) private readonly clickHandlers: (() => void)[],
    private readonly stepsService: StepsService
  ) {}

  ngOnDestroy() {
    this.stepsService.clearSteps();
  }

  handleClick() {
    this.stepsService.clearSteps();
    this.stepsService.addStep('Нажали на кнопку!');

    this.clickHandlers.forEach((handler, index) => {
      handler();

      this.stepsService.addStep(`Отработал обработчик №${++index}`);
    });
  }
}
