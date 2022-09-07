import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputModule} from "../../shared/input/input.module";
import {ButtonModule} from "../../shared/button/button.module";

import {ProductComponent} from './product/product.component';
import {ProductsComponent} from './products.component';


@NgModule({
  declarations: [
    ProductComponent,
    ProductsComponent,
  ],
  exports: [
    ProductsComponent
  ],
  imports: [
    CommonModule,
    InputModule,
    ButtonModule
  ]
})
export class ProductsModule {
}
