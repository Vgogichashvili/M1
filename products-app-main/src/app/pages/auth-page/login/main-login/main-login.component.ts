import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth-service/login.service';

@Component({
  selector: 'app-main-login',
  templateUrl: './main-login.component.html',
  styleUrls: ['./main-login.component.scss']
})
export class MainLoginComponent implements OnInit {

  loginForm: FormGroup | any
  
  
    constructor(private serviceLogin: LoginService, private router: Router, private route: ActivatedRoute) {}
  
    ngOnInit(): void {
      this.loginForm = new FormGroup({
        'userDetails' : new FormGroup({
            'username': new FormControl("kminchelle", [Validators.required]),
            'password': new FormControl("0lelplR", [Validators.required])
        })
      })
    }
  
  onSubmit(){
      this.serviceLogin.login(this.loginForm.value.userDetails.username, 
                                          this.loginForm.value.userDetails.password).subscribe((res) => {
        if(this.loginForm.valid){
            localStorage.setItem('token', JSON.stringify(res));
            this.router.navigate(['/list'])
        }else if (this.loginForm.invalid || '' || this.loginForm.dirty){
          this.router.navigate(['/register'])
        }
        else  {
          this.router.navigate(['/register'])
        }
      }
    )
      
  }
  
  
  
  }