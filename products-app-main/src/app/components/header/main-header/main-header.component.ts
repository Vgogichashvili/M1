import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products-service/products.service';
import { CartService } from 'src/app/services/products-service/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsListService } from 'src/app/services/products-service/products-list.service';
import { Observable } from 'rxjs';
import { ProductsStateService } from 'src/app/services/products-service/products-state.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
  
  categoryList$ = this.productStateService.getCategoryValue();
  listCategory = ['iphone', 'samsung', 'laptop', 'oil', 'food', 'womens', 'home']

  public totalItem: number = 0;
  
  constructor(private productStateService:ProductsStateService,
    private productsService: ProductsService,
    private productsListService:ProductsListService,
    private cartService:CartService,
      private router: Router, 
      private route: ActivatedRoute,
    ){}


  ngOnInit(): void {
    this.productsListService.categoryList()
    this.cartService.getItemProducts().subscribe(res => {
      this.totalItem = res.length;
    })
  }

  logSelected($event:any){
    this.productsListService.searchCategory($event.value)
    console.log($event.value)
  }

  onClick(){
    localStorage.removeItem('token');
    this.router.navigate([''])
  }
  ngOnDestroy() {
  
  }
}
