import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { LoginComponent } from './components/template/login/login.component';
const routes: Routes = [
  {
    path:"",
    component: HomeComponent
   },
   {
    path:"products",
    component: ProductCrudComponent
   },
   {
    path:"products/create",
    component: ProductCreateComponent
   },
   {
    path:"login",
    component: LoginComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{ }
