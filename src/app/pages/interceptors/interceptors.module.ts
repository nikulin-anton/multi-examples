import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TuiButtonModule } from '@taiga-ui/core';
import { InterceptorsRoutingModule } from './interceptors-routing.module';
import { InterceptorsComponent } from './interceptors.component';

@NgModule({
  declarations: [InterceptorsComponent],
  imports: [CommonModule, InterceptorsRoutingModule, TuiButtonModule],
})
export class InterceptorsModule {}
