import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductPageRoutingModule } from './product-page-routing.module';

import { FooterComponent } from 'src/app/components/footer/footer.component';
import { ListComponent } from '../list/list.component';
import { DetailComponent } from '../detail/detail.component';
import { CartComponent } from '../cart/cart.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { MainHeaderComponent } from 'src/app/components/header/main-header/main-header.component';


@NgModule({
  declarations: [
    // HeaderComponent, 
    // MainHeaderComponent,
    // ListComponent,
    // DetailComponent,
    // CartComponent,
    // FooterComponent,
    

  ],
  imports: [
    CommonModule,
    ProductPageRoutingModule
  ]
})
export class ProductPageModule { }
