import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { StateService } from '../stateService';
import { ProductsService } from './products.service';


export interface Product{
  products: any[],
  searchValue: any,
  categoryValue: any,
  loading: any,
  productsId:any,
  detailPage: any,
  productsItem:any[],
  addtoCart: any[],
  totalPrice:any,
  removeCart:any,
  removeAllCart: any[],

  
}

const initialState: Product = {
  products : [],
  searchValue: '',
  categoryValue: '',
  loading:false,
  productsId: '',
  detailPage: '',
  productsItem: [],
  addtoCart: [],
  totalPrice: '',
  removeCart: '',
  removeAllCart: [],

}
@Injectable({
  providedIn: 'root'
})
export class ProductsStateService extends StateService<Product> {


  constructor( private productsService: ProductsService) { 

    super(initialState);
  }
  
// setItemProducts(products:any){
//   this.setState({products: [...this.state.products, products]})
// }

// ! add
getItemProducts(){
  return this.select((state) => state.productsItem)
}
setItemProducts(products:any){
  this.setState({products})
}
// : [...this.state.products, products]
setAddtoCart(products:any){
  this.setState({products})
}
getAddtoCart(){
  return this.select((state) => state.addtoCart)
}

setTotalPrice(totalPrice: any){
  this.setState({totalPrice})
}
getTotalPrice(){
  return this.select((state)=> state.totalPrice)
}

getRemoveCart(){
  return this.select((state)=> state.removeCart)
}
setRemovecart(removeCart:any){
  this.setState({removeCart})
}


//!   მთელი პროდუქცია

setProducts(products:any){
  this.setState({products})
}
getProducts(){
  return this.select((state) => state.products)
}

// ! რითაც  იძებნება

setSearchValue(searchValue: any){
  this.setState({searchValue})
}
getSearchValue(){
    return this.select((state) => state.searchValue)
  }

//! კატეგორიები რაც ჩანს

setCategoryValue(categoryValue: any){
  this.setState({categoryValue})
}
getCategoryValue(){
    return this.select((state) => state.categoryValue)
  }

// ! loading

  setLoading(loading:boolean){
    this.setState({loading})
  }
  getLoading() {
      return this.select((state) => state.loading);
    }

// ! დეტალების გვერდი 

  setDetailPage(detailPage:any){
    this.setState({detailPage})
  }

  getDetailPage(){
    return this.select((state) => state.detailPage);
  }

  
}