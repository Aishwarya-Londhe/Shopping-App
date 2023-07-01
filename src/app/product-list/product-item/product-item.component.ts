import { Component, Input } from '@angular/core';
import { BagService } from 'src/app/shared/services/bag.service';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() prod: any;

  constructor(private ProdServe: ProductService) { }

  quantity: number = 1;
  shoppingBag: any[] = [];

  decreaseQuantity(): void {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity(): void {
    this.quantity++;
  }

  addToBag(): void {
    const item = {
      name: this.prod.name,
      quantity: this.quantity,
      price: this.prod.price
    };

    this.ProdServe.addNewProductToBag(item);
    
  
}
}