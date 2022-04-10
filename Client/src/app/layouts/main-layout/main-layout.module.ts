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
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    MainLayoutComponent,
  ]
})
export class MainLayoutModule { }
