import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { DxButtonModule, DxDataGridModule, DxFormModule, DxSelectBoxModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DxButtonModule,
    DxDataGridModule,
    DxFormModule,
    DxSelectBoxModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
