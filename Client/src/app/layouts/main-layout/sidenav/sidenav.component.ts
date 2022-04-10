import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  opened = true;
  
  accounts: any;

  constructor(private account: AccountService) {
  }
  
  ngOnInit(): void {
    this.account.getAccounts().subscribe(accounts => {
      this.accounts = accounts
    });
  }
}
