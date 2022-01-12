import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { BudgetTreeComponent } from './budget-tree/budget-tree.component';
import { UpDownDirective } from './directive/up-down.directive';

@NgModule({
  declarations: [
    AppComponent,
    BudgetTreeComponent,
    UpDownDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
