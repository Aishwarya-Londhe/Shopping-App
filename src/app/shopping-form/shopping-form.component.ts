import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from '../shared/model/product.model';
import { ProductService } from '../shared/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent implements OnInit {

  productForm : any;

  constructor( private ProdServe : ProductService, private activeRoute : ActivatedRoute) {}

  ngOnInit(): void {
    this.productForm = new FormGroup({
      pName : new FormControl('', Validators.required),
      pImg : new FormControl('', Validators.required),
      pPrice : new FormControl('', Validators.required)
    })
  }


onSubmit(){
  let prod = this.productForm.value;
  let productObj = new Product(prod.pName, prod.pImg, prod.pPrice);
  this.ProdServe.addNewProduct(productObj);
  if (this.productForm.valid) {
    console.log(this.productForm.value);
  } else {
    this.productForm.markAllAsTouched();
  }
  this.productForm.reset();
}
}
