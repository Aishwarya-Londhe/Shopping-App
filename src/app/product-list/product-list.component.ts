import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  constructor(private ProdServe: ProductService) { }

  ngOnInit(): void {
    this.productList = this.ProdServe.getProductList();

    this.ProdServe.productListObs.subscribe({
      next: (updatedProductList: any) => {
        this.productList = updatedProductList;
      }
    })
  }
}
