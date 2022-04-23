import { Component, OnChanges } from '@angular/core';

import { AuthService } from 'src/app/services/auth-service/auth.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnChanges {

  constructor(private auth: AuthService) {}

  ngOnChanges() {
    let checkStatus = this.auth.isAuthenticated()
    if(!checkStatus) this.auth.logOut()
  }

}

