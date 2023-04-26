import { Observable, map, of, tap, switchMap } from 'rxjs';

import {  Injectable, } from '@angular/core';
import { ProductsService } from './products.service';
import { ProductsStateService } from './products-state.service';



@Injectable({
  providedIn: 'root'
})

export class ProductsListService {
  
  constructor( private productsService: ProductsService,
    private productStateService:ProductsStateService
    ) { }

    listOfProducts(){
      this.productStateService.setLoading(true);
      this.productsService.getProductList().subscribe(
        (products) => {
          this.productStateService.setProducts(products)
          this.productStateService.setLoading(false)
          console.log(products)
        },
      );
    }
    categoryList(){
      this.productStateService.setLoading(true);
      this.productsService.getCategory().subscribe(
        (categoryValue) => {
          this.productStateService.setCategoryValue(categoryValue)
          // console.log(categoryValue)
        }
      )
    }
    searchCategory(searchValue:any){
      this.productStateService.setLoading(true);
      this.productsService.getProductsSearch(searchValue).subscribe(
        (searchValue) => {
          this.productStateService.setSearchValue(searchValue)
    
          this.listOfProducts = searchValue

        }
      )
    }
    detailPage(productId:any){
      this.productStateService.setLoading(true);
      this.productsService.getdetailProdact(productId).subscribe(
        (detailPage) => {
          this.productStateService.setDetailPage(detailPage)
          this.productStateService.setLoading(false);
        }
      )
    }
    // getItemProduct(cart:any){
    //   this.productsService.getAddCart(cart).subscribe(
    //     (addtoCart) => {
    //       this.productStateService.setItemProducts(addtoCart)
    //     }
    //   )
    // }
  
}