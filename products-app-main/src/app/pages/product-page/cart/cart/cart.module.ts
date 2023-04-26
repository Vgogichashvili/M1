import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { MainCartComponent } from '../main-cart/main-cart.component';
import { CartComponent } from '../cart.component';


@NgModule({
  declarations: [
    CartComponent,
    MainCartComponent,
    

  ],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
