import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductsStateService } from './products-state.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  public cartItemList: any = []
  public productItemList = new BehaviorSubject<any>([]);

  constructor(private productStateService:ProductsStateService) { }

  getItemProducts(){
    return this.productItemList.asObservable()
  }
  setItemProducts(product: any){
    this.cartItemList.push(...product);
    this.productItemList.next(product);
  }

  addtoCart(product:any){
    this.cartItemList.push(product)
    this.productItemList.next(this.cartItemList);
    this.getToTalPrice();
  }
  getToTalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
    grandTotal += a.total;
    })
    return grandTotal
  }
  removeCartItem(product:any){
    this.cartItemList.map((a: any, index:any)=> {
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productItemList.next(this.cartItemList);
  }
  removeAllCart(){
    this.cartItemList = [];
    this.productItemList.next(this.cartItemList)
  }
}
