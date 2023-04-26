import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
import { Observable } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth-service/login.service';
import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';

@Component({
  selector: 'app-main-cart',
  templateUrl: './main-cart.component.html',
  styleUrls: ['./main-cart.component.scss']
})
export class MainCartComponent implements OnInit {

// item$: Observable<any> = this.productsStateService.getItemProducts()
public productItem: any = [];
public grandTotal !: number ;
  
// productItem$:Observable<any> = this.productsStateService.getAddtoCart()

  constructor (private serviceLogin: LoginService, 
                    private productsStateService:ProductsStateService,
                    private cartService:CartService,
                    private productsListService:ProductsListService,
                    private router: Router, 
                    private route: ActivatedRoute){}
                    
  ngOnInit(): void {
    this.cartService.getItemProducts().subscribe(res => {
      this.productItem = res
      this.grandTotal = this.cartService.getToTalPrice();
    })
  }
 removeItem(item:any){
    this.cartService.removeCartItem(item);
  }
  emptyCartItem(){
    this.cartService.removeAllCart();
  }

}
