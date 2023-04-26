import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { MainListComponent } from '../main-list/main-list.component';
import { ListComponent } from '../list.component';



@NgModule({
  declarations: [
    ListComponent,
    MainListComponent,
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
