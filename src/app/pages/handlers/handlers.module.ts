import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HandlersRoutingModule } from './handlers-routing.module';
import { HandlersComponent } from './handlers.component';

@NgModule({
  declarations: [HandlersComponent],
  imports: [CommonModule, HandlersRoutingModule],
})
export class HandlersModule {}
