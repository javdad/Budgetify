import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

import { AccountService } from 'src/app/services/account-service/account.service';
import { TransactionService } from 'src/app/services/transaction-service/transaction.service';
import { Account } from 'src/app/shared/interfaces/accountInterface';
import { Transaction } from 'src/app/shared/interfaces/transactionInterface';
import { CreateTransactionDialogComponent } from '../dialogs/transaction/create-transaction-dialog/create-transaction-dialog.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnDestroy, DoCheck{

  oldSelectedAccount!: Account
  selectedAccount!: Account

  transactions: Transaction[] = []
  transactionSub!: Subscription

  constructor( private transaction: TransactionService, private accountService: AccountService, private dialogRef: MatDialog) { }

  ngOnDestroy(): void {
    if (this.transactionSub){
      this.transactionSub.unsubscribe()
    }
  }

  ngDoCheck(): void {
    this.selectedAccount = this.accountService.getAccount()
    if (this.oldSelectedAccount !== this.selectedAccount) {
      this.oldSelectedAccount = this.selectedAccount

      this.transaction.getTransactions().subscribe((transactions) => {
        this.transactions = transactions.filter((t) => t.accountId === this.oldSelectedAccount._id)
      })
    }
  }

  createDialog() {
    this.dialogRef.open(CreateTransactionDialogComponent)
  }
}
