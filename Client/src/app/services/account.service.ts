import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Account } from '../shared/interfaces/accountInterface'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient){}

  getAccounts(): Observable<Account[]> {
    return this.http.get<Account[]>('http://localhost:3000/api/accounts')
  }
}
