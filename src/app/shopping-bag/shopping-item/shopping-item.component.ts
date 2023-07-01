import { Component, Input } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.css']
})
export class ShoppingItemComponent {
  @Input() prod: any;
  @Input() shoppingBag: any[] | any;

  constructor( private ProdServe : ProductService){}
}
