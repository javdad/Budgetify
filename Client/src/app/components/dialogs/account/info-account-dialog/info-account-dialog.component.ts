import { Component, Inject, OnInit } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Account } from 'src/app/shared/interfaces/accountInterface';

@Component({
  selector: 'app-info-account-dialog',
  templateUrl: './info-account-dialog.component.html',
  styleUrls: ['./info-account-dialog.component.scss']
})
export class InfoAccountDialogComponent implements OnInit {

  account!: Account
  isNegative!: boolean

  constructor(@Inject(MAT_DIALOG_DATA) public data: Account, private dialogRef: MatDialogRef<InfoAccountDialogComponent>) { }

  ngOnInit(): void {
    this.account = this.data

    if (this.account.balance < 0) {
      this.isNegative = true
    } else this.isNegative = false
  }

  onCloseClick() {
    this.dialogRef.close()
  }
}
