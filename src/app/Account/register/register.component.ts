import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterValidationServiceService } from 'src/app/Core/Custom-Validators/register-validation-service.service';
import { AccountService } from 'src/app/Core/Services/account.service';
import { UserRegister } from 'src/app/Shared/Models/user-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submitted:boolean=false;
  failed:boolean=false;
  // registration: UserRegister;
  registerForm: FormGroup;
  registered:boolean=false;

  constructor(private fb:FormBuilder, private customerValidator:RegisterValidationServiceService, 
    private registerService:AccountService, private _router:Router) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.compose([Validators.required, this.customerValidator.patternValidator()])],
      confirmPassword: ['', Validators.required],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      dateOfBirth: ['', Validators.required]      
    }, 
    {
      validator: this.customerValidator.MatchPassword('password','confirmPassword')
    });
  }

  get registerFormControl(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.registerForm.valid){   
      // alert('Form submitted Sucessfully');
      console.table(this.registerForm.value);

      const registration:UserRegister = {
        email: this.registerForm.controls['email'].value,
        password: this.registerForm.controls['password'].value,
        lastName: this.registerForm.controls['lastName'].value,
        firstName: this.registerForm.controls['firstName'].value,
        dateOfBirth: this.registerForm.controls['dateOfBirth'].value,
      };
      // this.registration.email = this.registerForm.controls['email'].value;
      // this.registration.password = this.registerForm.controls['password'].value;
      // this.registration.lastName = this.registerForm.controls['lastName'].value;
      // this.registration.firstName = this.registerForm.controls['firstName'].value;
      // this.registration.dateOfBirth = this.registerForm.controls['dateOfBirth'].value;

      this.registerService.Register(registration).subscribe( r => { //this.registration
        if (r) {  // r == true
          this.registered = true;
          setTimeout(() => {
            this._router.navigateByUrl('/Account/Login');
          }, 10000);  //10 sec          
        } else {  // r == false
          this.failed = true;
        }
      })
    }  
  }

}
