import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccountService } from 'src/app/services/account.service';

import { Account } from 'src/app/shared/interfaces/accountInterface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {
  opened = true;
  
  accounts: Account[] = [];
  accountSub!: Subscription

  constructor(private account: AccountService) {
  }

  ngOnDestroy(): void {
    if (this.accountSub){
      this.accountSub.unsubscribe()
    }
  }
  
  ngOnInit(): void {
    this.account.getAccounts().subscribe(accounts => {
      this.accounts = accounts
    });
  }
}
