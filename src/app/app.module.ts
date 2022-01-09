import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { APP_NAME } from './const/app-name';
import { APP_NAME_TOKEN } from './tokens/app-name.token';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, HeaderModule],
  providers: [{ provide: APP_NAME_TOKEN, useValue: APP_NAME }],
  bootstrap: [AppComponent],
})
export class AppModule {}
