import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from '../register.component';
import { ListComponent } from 'src/app/pages/product-page/list/list.component';
import { isRegister } from 'src/app/services/guards/register.guard';

const routes: Routes = [
  {
    path: '', component: RegisterComponent
  },
  {
    path:'list', component:ListComponent,
    canActivate: [isRegister]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
