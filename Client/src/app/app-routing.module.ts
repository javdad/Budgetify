import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthLoginComponent } from './auth/auth-login/auth-login.component';
import { AuthGuard } from './auth/auth.guard';
import { CategoriesComponent } from './components/categories/categories.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { SidenavComponent } from './layouts/main-layout/sidenav/sidenav.component';
import { NotFoundComponent } from './not-found/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: AuthLoginComponent}
    ]},
    {path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
      {path: '', component: SidenavComponent, canActivate:[AuthGuard], children: [
        {path: '', component: TransactionsComponent},
        {path: 'categories', component: CategoriesComponent},
        {path: 'statistics', component: StatisticsComponent},
    ]}
  ]},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
