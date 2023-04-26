import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, } from '@angular/router';
import { HomeComponent } from './pages/product-page/home/home.component';
import { isAuthenticated } from './services/guards/login.guard';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'list', pathMatch: 'full',
    loadChildren: () => import('./pages/product-page/list/list/list.module').then(item => item.ListModule),
    canActivate:[isAuthenticated]
  }, 
  {
    path: 'details/:id',pathMatch:'full',
    loadChildren: () => import('./pages/product-page/detail/detail/detail.module').then(item => item.DetailModule)
  }, 
  {
    path: 'cart', pathMatch: 'full',
    loadChildren: () => import('./pages/product-page/cart/cart/cart.module').then(item => item.CartModule)
  }, 
  {
    path: 'login',  pathMatch: 'full',
    loadChildren: () => import ('./pages/auth-page/login/login/login.module').then(item => item.LoginModule)
  }, 
  {
    path: 'register', pathMatch: 'full',
    loadChildren: () => import('./pages/auth-page/register/register/register.module').then(item => item.RegisterModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
