import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// api-თან სამუშაო სერვისი

@Injectable({
  providedIn: 'root'
})
export class  ProductsService{
  
  // call api

  private apiUrl = environment.apiUrl;  

  constructor( private http:HttpClient) { }

  //  get all product list 
  

  getProductList(): Observable<any[]> {
    return this.http.get<any>(`${this.apiUrl}/products`).pipe(
      map((res:any) => res.products))
  }

  //  search form

  getProductsSearch(search:any) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/products/search?q=${search}`)
  }
  

  //  go to detail page with id

  getdetailProdact(id:any): Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/products/${id}`)
  }

  // dropdow 

  getCategory():Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/products/categories`)
   
  }

  // add cart

  getAddCart(cart:any[]):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/carts/add`, cart)
  }

getPageSize():Observable<any>{
  return this.http.get<any>(`${this.apiUrl}/products?limit=10&skip=10&select=title,price`)
}
}
