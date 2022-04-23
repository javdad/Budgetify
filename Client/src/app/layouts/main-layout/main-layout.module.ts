import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MainLayoutComponent } from './main-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { TransactionsComponent } from 'src/app/components/transactions/transactions.component';
import { TransactionComponent } from 'src/app/components/transactions/transaction/transaction.component';
import { StatisticsComponent } from 'src/app/components/statistics/statistics.component';
import { AccountComponent } from 'src/app/components/account/account.component';
import { CreateTransactionDialogComponent } from 'src/app/components/dialogs/transaction/create-transaction-dialog/create-transaction-dialog.component';
import { InfoTransactionDialogComponent } from 'src/app/components/dialogs/transaction/info-transaction-dialog/info-transaction-dialog.component';
import { EditTransactionDialogComponent } from 'src/app/components/dialogs/transaction/edit-transaction-dialog/edit-transaction-dialog.component';
import { DeleteTransactionDialogComponent } from 'src/app/components/dialogs/transaction/delete-transaction-dialog/delete-transaction-dialog.component';
import { CreateAccountDialogComponent } from 'src/app/components/dialogs/account/create-account-dialog/create-account-dialog.component';
import { InfoAccountDialogComponent } from 'src/app/components/dialogs/account/info-account-dialog/info-account-dialog.component';
import { EditAccountDialogComponent } from 'src/app/components/dialogs/account/edit-account-dialog/edit-account-dialog.component';
import { DeleteAccountDialogComponent } from 'src/app/components/dialogs/account/delete-account-dialog/delete-account-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [  
    MainLayoutComponent,
    HeaderComponent, 
    SidenavComponent, 
    FooterComponent, 
    AsideComponent, 
    CategoriesComponent,
    TransactionsComponent,
    StatisticsComponent,
    AccountComponent,
    TransactionComponent,
    CreateTransactionDialogComponent,
    EditTransactionDialogComponent,
    InfoTransactionDialogComponent,
    DeleteTransactionDialogComponent,
    CreateAccountDialogComponent,
    EditAccountDialogComponent,
    InfoAccountDialogComponent,
    DeleteAccountDialogComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class MainLayoutModule { }
