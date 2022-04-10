import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: any = []

  constructor(private category: CategoryService) { }

  ngOnInit(): void {
    this.category.getCategories().subscribe((categories) => {
      this.categories = categories
    })
  }

}
