import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingFormComponent } from './shopping-form/shopping-form.component';

const routes: Routes = [
  { path : 'new-product', component : ShoppingFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
