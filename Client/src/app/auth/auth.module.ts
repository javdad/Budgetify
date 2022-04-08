import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthLoginComponent } from './auth-login/auth-login.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    AuthLoginComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    AuthLoginComponent
  ]
})
export class AuthModule { }
