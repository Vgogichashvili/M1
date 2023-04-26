import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from 'src/app/services/auth-service/register.service';

@Component({
  selector: 'app-main-register',
  templateUrl: './main-register.component.html',
  styleUrls: ['./main-register.component.scss']
})
export class MainRegisterComponent implements OnInit{

  registerForm: FormGroup | any

  constructor(private fb: FormBuilder, 
                    private router: Router,
                    private route: ActivatedRoute,
                    private registerService:RegisterService) { }

  ngOnInit(): void {
                      this.registerForm = this.fb.group({
                        firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
                        lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
                        age: ['', Validators.required],
                        email: ['', [Validators.required, Validators.email]],
                        tel: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{9}$')]],
                        password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(20), this.passwordValidator]]
                        })
                    }
 passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
    const value = control.value;
     if (!value) {
       return null;
     }
    const hasUppercase = /[A-Z]/.test(value);
    const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
      return hasUppercase && hasSymbol ? null : { invalidPassword: true };
    }
  onSubmit() {
    this.registerService.register(this.registerForm.value.firstName,
                                                this.registerForm.value.lastName,
                                                this.registerForm.value.age,
                                                this.registerForm.value.email,
                                                this.registerForm.value.tel,
                                                this.registerForm.value.password,)
    .subscribe((res:any) => {
        if(this.registerForm.valid){
           localStorage.setItem('token', JSON.stringify(res));
           this.router.navigate(['/list'])
          }else if(this.registerForm.invalid){
                      alert('Something went wrong ! Please check !')
                      localStorage.removeItem('token');
                      this.router.navigate(['/register'])
              }
          })           
  }
}
