import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/shared/interfaces/transactionInterface';

@Component({
  selector: 'app-edit-transaction-dialog',
  templateUrl: './edit-transaction-dialog.component.html',
  styleUrls: ['./edit-transaction-dialog.component.scss']
})
export class EditTransactionDialogComponent implements OnInit {

  transaction!: Transaction

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transaction,  private dialogRef: MatDialogRef<EditTransactionDialogComponent>) { }

  ngOnInit(): void {
    this.transaction = this.data
  }

  onCloseClick() {
    this.dialogRef.close()
  }

}
