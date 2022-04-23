import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Transaction } from 'src/app/shared/interfaces/transactionInterface';

@Component({
  selector: 'app-delete-transaction-dialog',
  templateUrl: './delete-transaction-dialog.component.html',
  styleUrls: ['./delete-transaction-dialog.component.scss']
})
export class DeleteTransactionDialogComponent implements OnInit {

  transaction!: Transaction

  constructor(@Inject(MAT_DIALOG_DATA) public data: Transaction,  private dialogRef: MatDialogRef<DeleteTransactionDialogComponent>) { }

  ngOnInit(): void {
    this.transaction = this.data
  }

  onCloseClick() {
    this.dialogRef.close()
  }

}
