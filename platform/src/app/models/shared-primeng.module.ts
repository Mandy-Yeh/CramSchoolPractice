import { NgModule } from '@angular/core';
//primeng
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button'; //按鈕
import { DropdownModule } from 'primeng/dropdown'; //下拉選單
import { InputTextModule } from 'primeng/inputtext'; //輸入框
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { RippleModule } from 'primeng/ripple';
import { ProgressBarModule } from 'primeng/progressbar';
import { KeyFilterModule } from 'primeng/keyfilter';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CheckboxModule } from 'primeng/checkbox';
import { SelectButtonModule } from 'primeng/selectbutton';

import { BreadcrumbModule } from 'primeng/breadcrumb';

@NgModule({
  exports: [
    TabMenuModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    MessageModule,
    RippleModule,
    ProgressBarModule,
    KeyFilterModule,
    PanelModule,
    RadioButtonModule,
    CalendarModule,
    InputMaskModule,
    InputTextareaModule,
    CheckboxModule,
    SelectButtonModule,
    BreadcrumbModule,
  ],
})
export class SharedPrimengModule {}
