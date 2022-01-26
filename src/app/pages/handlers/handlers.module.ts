import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { StepsService } from 'src/app/services/steps.service';
import { StepsModule } from '../../components/steps/steps.module';
import { HandlersRoutingModule } from './handlers-routing.module';
import { HandlersComponent } from './handlers.component';

@NgModule({
  declarations: [HandlersComponent],
  imports: [CommonModule, HandlersRoutingModule, TuiButtonModule, StepsModule],
  providers: [StepsService],
})
export class HandlersModule {}
