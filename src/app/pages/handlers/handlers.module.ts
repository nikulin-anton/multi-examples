import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { StepsService } from 'src/app/services/steps.service';
import { HandlersRoutingModule } from './handlers-routing.module';
import { HandlersComponent } from './handlers.component';

@NgModule({
  declarations: [HandlersComponent],
  imports: [CommonModule, HandlersRoutingModule, TuiButtonModule],
  providers: [StepsService],
})
export class HandlersModule {}
