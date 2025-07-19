import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login {

    model = {
      username : '',
      password : '',
  };


  errorMessage: string = '';
  
  onSubmit(signupForm: any): void {
    console.log("Login in progress")
    if (signupForm.valid) {
      this.authService.login(this.model.username, this.model.password).subscribe(
        (response) => {
          console.log("Login Successfull", response);
          this.router.navigate(['/']);
        },
        (error) => {
          console.log(error)
          console.error("Login Failed successfully", error);
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

  constructor(private authService: AuthService, private router: Router) {}

}
