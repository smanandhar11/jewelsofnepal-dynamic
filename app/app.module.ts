import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule} from '@angular/forms';

import { AppComponent }  from './app.component';
//import { ProductService } from './product/product.service';
import { ProductDetailGuard } from './product/product-guard.service';
import { ProductMenuComponent } from './product/product-menu.component';
import { ProductDetailComponent } from './product/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import {ProductConfirmComponent} from "./product/product-confirm.component";
import {ProductFilterPipe} from './product/product-filter.pipe';
import { ProductFilterTwoPipe } from './product/product-filtertwo.pipe';



@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'products', component:ProductMenuComponent},
      {path:'products/:id/confirm', component:ProductConfirmComponent},
      {path:'products/:id', canActivate:[ProductDetailGuard], component:ProductDetailComponent},
      {path:'welcome', component:WelcomeComponent},
      {path:'', redirectTo:'welcome', pathMatch:'full'},
      {path:'**', redirectTo:'welcome',pathMatch:'full'}
    ])
  ],
  declarations: [
    AppComponent,
    ProductMenuComponent,
    ProductDetailComponent,
    WelcomeComponent,
    ProductConfirmComponent,
    ProductFilterPipe,
    ProductFilterTwoPipe

  ],
  providers:[ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
