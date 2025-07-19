import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css']
})
export class Signup {

  model = {
      username : '',
      password : '',
  };

  errorMessage : string = '';
  
  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(signupForm: any): void {
    console.log("signup in progress")
    if (signupForm.valid) {
      this.authService.signup(this.model.username, this.model.password, "admin", "admin").subscribe(
        (response) => {
          console.log("Signup Successfull", response);
          this.router.navigate(['/auth/login']);
        },
        (error) => {
          console.log(error)
          console.error("Signup Failed successfully", error);
          this.errorMessage = 'An Error Occurred. Please try again'
        }
      )
      console.log("Form Submitted", signupForm.value);
      // Handle form submission logic here (e.g., send to API)
    } else {
      console.log("Form is not valid");
    }
  }

  goBack(): void {
    // Handle back button click (e.g., navigate to a different page)
    console.log("Going back");
    this.router.navigate(['/']);

  }
  

}
