import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './screens/home/home.component';
import { CateListComponent } from './screens/cate-list/cate-list.component';
import { ProductDetailComponent } from './screens/product-detail/product-detail.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './screens/login/login.component';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { LogoutComponent } from './screens/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CateListComponent,
    ProductDetailComponent,
    MenuComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
