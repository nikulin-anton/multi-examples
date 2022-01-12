import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { InterceptorsRoutingModule } from './interceptors-routing.module';
import { InterceptorsComponent } from './interceptors.component';
import { BoredApiService } from './services/bored.api.service';
import { RequestStepsService } from './services/request-steps.service';

@NgModule({
  declarations: [InterceptorsComponent],
  imports: [CommonModule, InterceptorsRoutingModule, TuiButtonModule],
  providers: [BoredApiService, RequestStepsService],
  exports: [InterceptorsComponent],
})
export class InterceptorsModule {}
