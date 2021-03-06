import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { CateListComponent } from './screens/cate-list/cate-list.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';

import { LoginComponent } from './screens/login/login.component';
import { AuthGuard } from './_helpers/auth.guard';
import { LogoutComponent } from './screens/logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard]},
  { path: 'san-pham',component: CateListComponent, canActivate: [AuthGuard]},
  { path: 'chi-tiet-san-pham/:id', component: ProductDetailComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  { path: '**', redirectTo: ''}
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
