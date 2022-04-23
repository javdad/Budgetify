import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';

@Component({
  selector: 'app-create-transaction-dialog',
  templateUrl: './create-transaction-dialog.component.html',
  styleUrls: ['./create-transaction-dialog.component.scss']
})
export class CreateTransactionDialogComponent {

  createSub!: Subscription

  createForm = new FormGroup({
    title: new FormControl(null, [Validators.required, Validators.minLength(1)]),
    description: new FormControl(null),
    amount: new FormControl(null, [Validators.required]),
    payee: new FormControl(null, [Validators.required, Validators.minLength(1)])
  })

  constructor(private dialogRef: MatDialogRef<CreateTransactionDialogComponent>, private transactionService: TransactionService) { }


  onCloseClick() {
    this.dialogRef.close()
  }

  onSubmit() {
    this.transactionService.createTransaction(this.createForm)
  }
}
