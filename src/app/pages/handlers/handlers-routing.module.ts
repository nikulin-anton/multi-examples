import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandlersComponent } from './handlers.component';

const routes: Routes = [{ path: '', component: HandlersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HandlersRoutingModule {}
