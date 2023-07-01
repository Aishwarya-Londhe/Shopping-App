import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-list/product-item/product-item.component';
import { ProductService } from './shared/services/product.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ShoppingBagComponent } from './shopping-bag/shopping-bag.component';
import { ShoppingItemComponent } from './shopping-bag/shopping-item/shopping-item.component';
import { BagService } from './shared/services/bag.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShoppingFormComponent,
    ProductListComponent,
    ProductItemComponent,
    ShoppingBagComponent,
    ShoppingItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    BagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
