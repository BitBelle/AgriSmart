import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  form !: FormGroup
  showPassword = false;

  ngOnInit(): void {
    this.form = new FormGroup ({
      // name : new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
      name : new FormControl(null, Validators.required),
      email : new FormControl(null, [Validators.required, Validators.email]),
      password : new FormControl(null, [Validators.required,
                                        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,10}$')]),
      role : new FormControl(null, Validators.required),
    })
  }

    togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
     if (this.form.valid) {
      console.log('Form submitted:', this.form.value);
    }
  }

}
