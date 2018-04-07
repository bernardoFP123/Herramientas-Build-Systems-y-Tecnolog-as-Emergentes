import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LogInComponent } from './components/component_log_in';
import { ShopComponent } from './components/component_shop';
import { NavigationComponent } from './components/component_navigation';
import { ProductsComponent } from './components/component_products';
import { CartComponent } from './components/component_cart';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: '', component: LogInComponent },
   { path: 'Shop', component: ShopComponent}
];

@NgModule({
  imports:      [ BrowserModule ,
                  RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent,
                  LogInComponent,
                  ShopComponent,
                  ProductsComponent,
                  NavigationComponent,
                  CartComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
