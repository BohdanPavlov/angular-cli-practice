import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from "./core/core.module";
import {ProductsModule} from "./features/products/products.module";
import {CartModule} from "./features/cart/cart.module";

import { AppComponent } from './app.component';
import { ComponentsDirective } from './components.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComponentsDirective,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
