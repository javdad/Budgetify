import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.scss']
})
export class AuthLoginComponent implements OnInit, OnDestroy {

  loginForm!: FormGroup
  authSub!: Subscription;

  constructor(private auth: AuthService, private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    })
  }
  
  ngOnDestroy(): void {
    if (this.authSub){
      this.authSub.unsubscribe()
    }
  }

  onSubmit() {
    this.loginForm.disable()

    this.authSub = this.auth.login(this.loginForm.value).subscribe(
      () => this.router.navigate(['/main']),
      (error) => this.loginForm.enable( )
    )   
  }

}
