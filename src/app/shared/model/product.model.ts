export class Product{
    name : string;
    imgPath : string;
    price : string;

    constructor(pName : string, pImg : string, pPrice : string){
        this.name = pName;
        this.imgPath = pImg;
        this.price = pPrice;
    }
}