import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing-module';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    Login,
    Signup
  ]
})
export class AuthModule { }
