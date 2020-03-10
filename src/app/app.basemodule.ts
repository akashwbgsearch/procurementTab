import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BaseComponent } from './app.basecomponent';
import { TableComponent } from './app.tableapi';
import { Tab } from './Tab';
import { Tabset } from './Tabset';
import { APIConnectionService  } from './app.apiconnectionservice';
import { DataTablesModule } from 'angular-datatables';
import { sanitizeHtmlPipe } from './sanitize-html.pipe';
import { DateFormatPipe } from './date.pipe';
import { ToCurrencyPipe } from './toCurrency.pipe';
import { ObjectFilterPipe } from './objectFilter.pipe';
import { ReplaceStringPipe } from './replacestring.pipe';
import { ExcelService } from './excel.service';
 
@NgModule({
  declarations: [
    BaseComponent,Tab,Tabset,TableComponent,sanitizeHtmlPipe,DateFormatPipe,ToCurrencyPipe,ObjectFilterPipe,ReplaceStringPipe
  ],
  imports: [
    BrowserModule, HttpModule, DataTablesModule
  ],
  exports: [],

  providers: [APIConnectionService,ExcelService],
  bootstrap: [BaseComponent]
})
export class BaseModule { }
