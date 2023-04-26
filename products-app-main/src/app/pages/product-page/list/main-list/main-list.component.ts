import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartService } from 'src/app/services/products-service/cart.service';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { BehaviorSubject, Observable, map, of, switchMap, tap} from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';



@Component({
  selector: 'app-main-list',
  templateUrl: './main-list.component.html',
  styleUrls: ['./main-list.component.scss']
})
export class MainListComponent implements OnInit{

  productsList$:Observable<any[]> =this.productStateService.getProducts()
  loading$:Observable<boolean> = this.productStateService.getLoading();
  searchValue$:Observable<any> = this.productStateService.getSearchValue();
  categoryValue$:Observable<any> = this.productStateService.getCategoryValue();
  
 searchTerm$:any
 products:any

   constructor(private productStateService:ProductsStateService,
    private productsService: ProductsService,
    private productsListService:ProductsListService,
    private cartService: CartService){}

ngOnInit(): void {
 
    this.productsListService.listOfProducts()
    this.searchValue$.subscribe((categoryValue: any) => {
      if (categoryValue && categoryValue.products) { // check if categoryValue is not null or undefined, and it has a 'products' property
        this.products = categoryValue.products;
  
        this.productsList$ = of(this.products)
        // this.fetchProducts()
      } else {
        // handle the case where categoryValue is null or undefined, or it doesn't have a 'products' property
      }
    });
    
}


fetchProducts(){
  this.searchValue$.subscribe((res:any) =>{
 
    this.searchTerm$ = res

    // if(res === 'Choose category'){
    //   this.searchTerm$ = of(this.searchTerm$)
    // }else {
    //   this.searchTerm$ = of(res)
    // }
    // this.productsList$ = this.searchTerm$.pipe(
    // switchMap(async (value) => this.productStateService.setSearchValue(value)),
    // map((res: any) => res))


    


  if(this.productsList$ != undefined) {
    this.productsList$ = this.searchTerm$.pipe(
      switchMap((value: string) => this.productsService.getProductsSearch(value)),
      map((res: any) => res.products),
      tap((products: any) => {
        products.forEach((a: any) => {
          Object.assign(a, {quantity:1, total: a.price });
        });
      })
    )
  }
  
})

} 
  addtocart(item: any){
    this.cartService.addtoCart(item);
    // this.productsService.getAddCart(item)
    
  
  }


 
  
}





  // this.productStateService.setProducts( this.productsList$)
  // this.productsList$ = this.productsService.getProductList()

// fetchProducts(){
//   this.productStateService.setLoading(true);
//   this.productStateService.getCategoryValue().subscribe((res:any) =>{
//     this.searchValue$ = res
//     this.productStateService.setLoading(false)
//     if(res === 'Choose category'){
//       this.searchValue$ = of('')
//     }else {
//       this.searchValue$ = of(res)
//     }
//   this.productsList$ = this.searchValue$.pipe(
//     switchMap((value: string) => this.productsService.getProductsSearch(value)),
//     map((res: any) => res.products),
//     tap((products: any) => {
//       products.forEach((a: any) => {
//         Object.assign(a, {quantity:1, total: a.price });
//       });
//     })
//   );
// })
// } 

