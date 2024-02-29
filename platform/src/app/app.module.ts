import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyElementsModule } from '@angular-extensions/elements';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { LoginComponent } from './login/login.component';
import { SharedPrimengModule } from './models/shared-primeng.module';
@NgModule({
  declarations: [AppComponent, SidebarComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyElementsModule,
    SharedPrimengModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
