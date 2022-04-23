import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';


import { AccountService } from 'src/app/services/account-service/account.service';
import { Account } from 'src/app/shared/interfaces/accountInterface';
import { DeleteAccountDialogComponent } from '../dialogs/account/delete-account-dialog/delete-account-dialog.component';
import { EditAccountDialogComponent } from '../dialogs/account/edit-account-dialog/edit-account-dialog.component';
import { InfoAccountDialogComponent } from '../dialogs/account/info-account-dialog/info-account-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent  {

  @Input() account!: Account;
  

  status: boolean = true

  constructor(
    private router: Router, 
    private dialogRef: MatDialog,
    private accountService: AccountService
    ) {}



  editDialog() {
    this.dialogRef.open(EditAccountDialogComponent)
  }

  infoDialog(account: Account) {
    this.dialogRef.open(InfoAccountDialogComponent, {
      data: account
    })
  }

  deleteDialog() {
    this.dialogRef.open(DeleteAccountDialogComponent)
  }

  onClick(account: Account) {
    if (this.status) this.status = false
    this.accountService.setAccount(account)
    this.router.navigate(['main'])
  }

}
