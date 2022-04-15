import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TransactionService } from 'src/app/services/transaction.service';
import { Transaction } from 'src/app/shared/interfaces/transactionInterface';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnDestroy {

    transactions: Transaction[] = []
    transactionSub!: Subscription

  constructor( private transaction: TransactionService) { }

  ngOnDestroy(): void {
    if (this.transactionSub){
      this.transactionSub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.transaction.getTransactions().subscribe((transactions) => {
      this.transactions = transactions
    })
  }

}
