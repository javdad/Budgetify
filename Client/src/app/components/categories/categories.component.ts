import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/shared/interfaces/categoryInterface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[] = [];
  categorySub!: Subscription

  constructor(private category: CategoryService) { }

  ngOnDestroy(): void {
    if (this.categorySub){
      this.categorySub.unsubscribe()
    }
  }

  ngOnInit(): void {
    this.category.getCategories().subscribe((categories) => {
      this.categories = categories
    })
  }

}
