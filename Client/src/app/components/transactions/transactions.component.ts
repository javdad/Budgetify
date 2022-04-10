import { Component, NgModule, OnInit } from '@angular/core';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

    transactions: any

  constructor( private transaction: TransactionService) { }

  ngOnInit(): void {
    this.transaction.getTransactions().subscribe((transactions) => {
      this.transactions = transactions
    })
  }

}
