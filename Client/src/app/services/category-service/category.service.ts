import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { Category, CreateCategory, UpdateCategory } from '../../shared/interfaces/categoryInterface';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
 
  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    const url = 'http://localhost:3000/api/categories'
    return this.http.get<Category[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  createCategory(newCategory: CreateCategory) {
    const url = 'http://localhost:3000/api/categories'
    return this.http.post(url, newCategory).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  updateCategory (updatedCategory: UpdateCategory, categoryId: string) {
    const url = 'http://localhost:3000/api/categories/' + categoryId
    return this.http.put(url, updatedCategory).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

  deleteCategory(categoryId: string) {
    const url = 'http://localhost:3000/api/categories/' + categoryId
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error)
      })
    )
  }

}
