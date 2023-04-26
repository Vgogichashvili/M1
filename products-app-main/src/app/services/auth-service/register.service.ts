import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  register(firstName:string, lastName:string, age:number, email:string, tel:number, password:string) {
    return this.http.post(`${this.apiUrl}/users/add`, {
      firstName:firstName,
      lastName:lastName,
      age:age,
      email:email,
      tel:tel,
      password:password

    })
  }
  isRegister(){
    return !!localStorage.getItem('token')
  }
}
