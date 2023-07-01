import { BehaviorSubject } from "rxjs";

export class BagService {
    public cartItemList: any;
    public productList = new BehaviorSubject<any>([]);

    getProducts() {
        return this.productList.asObservable();
    }

    setProducts(product: any) {
        this.cartItemList.push(...product);
        this.productList.next(product);
    }

    addtoBag(product: any) {
        this.cartItemList.push(product);
        this.productList.next(this.cartItemList);
        this.getTotalPrice()
    }

    getTotalPrice() {
        let grandTotal = 0;
        this.cartItemList.map((a:any)=>{
            grandTotal += a.total
        })
    }
}