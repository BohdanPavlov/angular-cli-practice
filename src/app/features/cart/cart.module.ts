import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputModule} from "../../shared/input/input.module";

import { CartComponent } from './cart.component';

@NgModule({
  declarations: [
    CartComponent
  ],
  exports: [
    CartComponent
  ],
  imports: [
    CommonModule,
    InputModule
  ]
})
export class CartModule { }
