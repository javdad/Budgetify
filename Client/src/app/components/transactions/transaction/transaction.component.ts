
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CategoryService } from 'src/app/services/category-service/category.service';
import { Category } from 'src/app/shared/interfaces/categoryInterface';
import { Transaction } from 'src/app/shared/interfaces/transactionInterface';
import { DeleteTransactionDialogComponent } from '../../dialogs/transaction/delete-transaction-dialog/delete-transaction-dialog.component';
import { EditTransactionDialogComponent } from '../../dialogs/transaction/edit-transaction-dialog/edit-transaction-dialog.component';
import { InfoTransactionDialogComponent } from '../../dialogs/transaction/info-transaction-dialog/info-transaction-dialog.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  constructor(private categoryService: CategoryService, private dialogRef: MatDialog) {}

  @Input() transaction!: Transaction;
  
  categories: Category[] = []

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe((data) => this.categories = data)
  }
  
  getCategory(categoryId: string): string {
    let cat = this.categories.filter((category) => category._id === categoryId)
    return cat[0].name
  }

  getCategories(categoriesId: Array<string> | string): (Category | undefined)[] {
    let needCategories = []
    for (let i = 0; i < categoriesId.length; i++) {
      let category = this.categories.find((obj) => obj._id === categoriesId[i])
      needCategories.push(category);
    }
    return needCategories;
  }

  deleteDialog(transaction: Transaction) {
    this.dialogRef.open(DeleteTransactionDialogComponent, {
      data: transaction
    })
  }

  editDialog(transaction: Transaction) {
    this.dialogRef.open(EditTransactionDialogComponent, {
      data: transaction
    })
  }

  infoDialog(transaction: Transaction) {
    this.dialogRef.open(InfoTransactionDialogComponent, {
      data: {
        transaction,
        categories: this.getCategories(transaction.categoryId)
      }
    })
  }
  
  getType(type: string): string {
    if (type === 'income') return 'keyboard_double_arrow_up'
    return 'keyboard_double_arrow_down'
  }

  getAmount(type: string, amount: number): number {
    if (type === 'income') return Math.abs(amount)
    return -Math.abs(amount)
  }

  getClass(type: string): string {
    if (type === 'income') return 'income'
    return 'expense'
  }

}
