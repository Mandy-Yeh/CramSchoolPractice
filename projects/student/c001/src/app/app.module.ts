import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// primeng 載入
import { SharedPrimengModule } from 'platform/src/app/models/shared-primeng.module';
import { AppComponent } from './app.component';
import { C01Component } from './c01/c01.component';
import { C02Component } from './c02/c02.component';
import { C03Component } from './c03/c03.component';

@NgModule({
  declarations: [AppComponent, C01Component, C02Component, C03Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedPrimengModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
})
export class AppModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap(): void {
    const customElement = createCustomElement(AppComponent, {
      injector: this.injector,
    });
    customElements.define('student-list', customElement);
  }
}
