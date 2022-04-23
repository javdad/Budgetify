import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogClose, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Transaction } from 'src/app/shared/interfaces/transactionInterface';
import { Category } from 'src/app/shared/interfaces/categoryInterface';

@Component({
  selector: 'app-info-transaction-dialog',
  templateUrl: './info-transaction-dialog.component.html',
  styleUrls: ['./info-transaction-dialog.component.scss']
})
export class InfoTransactionDialogComponent implements OnInit {

  transaction!: Transaction;
  categories: Category[] = []

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialogRef: MatDialogRef<InfoTransactionDialogComponent>) { }

  ngOnInit(): void {
    this.transaction = this.data.transaction
    this.categories = this.data.categories
  }

onCloseClick() {
  this.dialogRef.close()
}

}
