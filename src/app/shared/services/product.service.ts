import { EventEmitter } from "@angular/core";
import { Product } from "../model/product.model";
import { BehaviorSubject, Subject } from "rxjs";

export class ProductService{
    productDataList: Product[] = [
        new Product('Laptop', 'https://vlebazaar.in/image/cache/catalog//B09S9PL2BS/HP-14S-Intel-Pentium-Silver-N6000-8Gb-Ram256Gb-Ssd-14-Inches-356Cm-Hd-Micro-Edge-1000x1000.jpg', '40,000 Rs'),
        new Product('Earbuds', 'https://rukminim1.flixcart.com/image/416/416/l4n2oi80/headphone/2/b/u/p180usb-c-earbuds-with-remote-and-mic-edifier-original-imagfhtzagk87dmp.jpeg', '1,000 Rs'),
        new Product('Mobile', 'https://rukminim1.flixcart.com/image/416/416/ktketu80/mobile/6/n/d/iphone-13-mlpg3hn-a-apple-original-imag6vpyghayhhrh.jpeg', '55,000 Rs')
    ];
    shoppingBag: any[] = [];

    productListObs = new Subject();
    shoppingBagObs = new Subject();

    getProductList(){
        return this.productDataList.slice();
    }

    addNewProduct(newProd : any){
        this.productDataList.push(newProd);
        console.log(this.getProductList);
        this.productListObs.next(this.productDataList.slice())
    }

    addNewProductToBag(newItem : any){
        this.shoppingBag.push(newItem);
        console.log(this.shoppingBag);
        this.shoppingBagObs.next(this.shoppingBag)
    }

}