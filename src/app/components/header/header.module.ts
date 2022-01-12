import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TuiTabsModule } from '@taiga-ui/kit';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, TuiTabsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
