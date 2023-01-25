import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { SharedModule } from './components/shared/shared.module';
import { PriceCartComponent } from './components/price-cart/price-cart.component';


@NgModule({
  declarations: [
    AppComponent,
    PriceCartComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
