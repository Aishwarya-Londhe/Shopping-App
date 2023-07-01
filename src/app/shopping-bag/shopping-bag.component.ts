import { Component } from '@angular/core';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-shopping-bag',
  templateUrl: './shopping-bag.component.html',
  styleUrls: ['./shopping-bag.component.css']
})
export class ShoppingBagComponent {
  shoppingBag: any[] = [];

  constructor(private ProdServe: ProductService) {}

  ngOnInit(): void {

    this.ProdServe.shoppingBagObs.subscribe({
      next: (updatedShoppingBag: any[] | any) => {
        this.shoppingBag = updatedShoppingBag;
      }
    })
  }
}
