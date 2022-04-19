import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Transaction } from '../shared/interfaces/transactionInterface';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  constructor(private http: HttpClient) { }

  getTransactions(): Observable<Transaction[]>{
    return this.http.get<Transaction[]>('http://localhost:3000/api/transactions')
  }

}
