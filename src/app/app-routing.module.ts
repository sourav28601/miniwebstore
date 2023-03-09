import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProductpageComponent } from './productpage/productpage.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent},
  {path:"product",component:ProductpageComponent},
  {path:"cart",component:CartComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
