import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  constructor(private auth: AuthService, private router: Router) {}

  logOut(): void {
    this.auth.logOut()
    this.router.navigate(['login'])
  }
}
