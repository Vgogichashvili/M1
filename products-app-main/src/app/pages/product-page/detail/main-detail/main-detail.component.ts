import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { ProductsService } from 'src/app/services/products-service/products.service';

@Component({
  selector: 'app-main-detail',
  templateUrl: './main-detail.component.html',
  styleUrls: ['./main-detail.component.scss']
})
export class MainDetailComponent implements OnInit {

  productsId:any;

  itemProduct$:Observable<any>= this.productStateService.getDetailPage()
  
  constructor( private productsListService:ProductsListService,
    private productStateService:ProductsStateService,
    private cartService: CartService,
    private route:ActivatedRoute) {}
    
ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
  this.productsId = params.get('id')
})
this.productsListService.detailPage(this.productsId)
}
addtocart(item: any){
this.cartService.addtoCart(item);
}
}
