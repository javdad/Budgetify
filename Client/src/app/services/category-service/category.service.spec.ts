import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { Category, CreateCategory, UpdateCategory } from '../../shared/interfaces/categoryInterface';

describe('CategoryService', () => {
  let categoryService: CategoryService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [
        CategoryService
      ]
    });

    categoryService = TestBed.inject(CategoryService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(categoryService).toBeTruthy();
  });


  describe('Get categories', () => {
    let expectedCategories: Category[]
  
    beforeEach(() => {
      categoryService = TestBed.inject(CategoryService);
  
      expectedCategories = [
        {
          _id: 'test id',
          name: 'test name',
          type: 'test type'
        }
       ] as Category[];
  
       it('should return exepcted categories', () => {
         categoryService.getCategories().subscribe({
           next: (categories) => expect(categories).toEqual(expectedCategories),
           error: fail
         })
  
         const req = httpTestingController.expectOne('http://localhost:3000/api/categories');
         expect(req.request.method).toEqual('GET');
  
         req.flush(expectedCategories);
       })
  
       it('should return 404 if there is no categories', () => {
         categoryService.getCategories().subscribe({
           next: fail,
           error: (error: HttpErrorResponse) => {
            expect(error.error).toBe('There is no any catagory');
            expect(error.status).toBe(404);
           }
         })
  
         const req = httpTestingController.expectOne('http://localhost:3000/api/categories');
  
         const message = 'There is no any catagory';
         req.flush(message, {status: 404, statusText: 'Categories not found'});
       })
  
    });
  })

  describe('Create categories', () => {

    const newCategory: CreateCategory = {
      name: 'test name',
      type: 'test type'
    }

    const expectedResponse = new HttpResponse(
      { status: 201, statusText: 'OK', body: 'Category created!' }
    );

    beforeEach(() => {
      categoryService = TestBed.inject(CategoryService);
    });

    it('should create a category and return success message', () => {


      categoryService.createCategory(newCategory).subscribe({
        next: (res) => expect(res).toEqual(expectedResponse),
        error: fail
      })

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories');
      expect(req.request.method).toEqual('POST');


      req.flush(expectedResponse);
    })

    it('should return status 400 if the category name exists', () => {
      categoryService.createCategory(newCategory).subscribe({
        next: fail,
        error: (error: HttpErrorResponse) => {
          expect(error.error).toBe(`Category with this name: '${newCategory.name}' is already exist!`)
          expect(error.status).toBe(400)
        }
      })

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories');

      const message = `Category with this name: '${newCategory.name}' is already exist!`;
      req.flush(message, { status: 400, statusText: 'Invalid request' });
    })
  })


  describe('Update category', () => {
        
    const categoryId = '623abaf5ec7b34114182558e'
    const updateCategory: UpdateCategory = { 
      name: 'test name',
      type: 'test type' 
    };

    beforeEach(() => {
      categoryService = TestBed.inject(CategoryService);
    });

    it('should update a category and return success message', () => {


      const expectedResponse = new HttpResponse(
        { status: 201, statusText: 'OK', body: 'Category updated!' }
      );

      categoryService.updateCategory(updateCategory, categoryId).subscribe({
        next: (res) => expect(res).toEqual(expectedResponse),
        error: fail,
      });

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories/' + categoryId);

      expect(req.request.method).toEqual('PUT');
      expect(req.request.body).toEqual(updateCategory);

      
      req.event(expectedResponse);
    });

    it('should return 500 error', () => {

      categoryService.updateCategory(updateCategory, categoryId).subscribe({
        next: fail,
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(500)
        },
      });

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories/' + categoryId);

      const message = 'error 500';
      req.flush(message, {status: 500, statusText: 'Internal server error'});
    });
  });


  describe('Delete category', () => {
    

    const categoryId = '623abaf5ec7b34114182558e'
    const deleteCategory: Category = { 
      _id: categoryId,
      name: 'test name',
      type: 'test type' 
    };

    beforeEach(() => {
      categoryService = TestBed.inject(CategoryService);
    });

    it('should delete a category and return success message', () => {


      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK', body: 'Category deleted!' }
      );

      categoryService.deleteCategory(deleteCategory._id).subscribe({
        next: (res) => expect(res).toEqual(expectedResponse),
        error: fail,
      });

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories/' + deleteCategory._id);

      expect(req.request.method).toEqual('DELETE');
      expect(req.request.body).toEqual(null);

      
      req.event(expectedResponse);
    });

    it('should return 500 error', () => {

      categoryService.deleteCategory(deleteCategory._id).subscribe({
        next: fail,
        error: (error: HttpErrorResponse) => {
          expect(error.status).toBe(500)
        },
      });

      const req = httpTestingController.expectOne('http://localhost:3000/api/categories/' + deleteCategory._id);

      const message = 'error 500';
      req.flush(message, {status: 500, statusText: 'Internal server error'});
    });
  });

});


