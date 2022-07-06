import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, NgForm } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegisterValidationServiceService } from 'src/app/Core/Custom-Validators/register-validation-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted:boolean=false;

  constructor(private fb:FormBuilder, private customerValidator:RegisterValidationServiceService) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', Validators.compose([Validators.required, this.customerValidator.patternValidator()])],
      DateOfBirth: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, 
    {
      validator: this.customerValidator.MatchPassword('password','confirmPassword')
    });
  }

  get registerFormControl(){
    return this .registerForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.valid){
      alert('Form submitted Sucessfully');
      console.table(this.registerForm.value);
    }  
  }

}
