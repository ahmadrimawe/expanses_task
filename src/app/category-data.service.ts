import { ICategory } from './Icategeory';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class CategoryDataService {
  categories: Array < ICategory > = [];

  
  constructor() {

   this.initCategories();
    
    
  }

  initCategories(){
    this.categories = [{
      "Name": "Shopping",
      "Details": "of expenses",
      "Price": 0,
      "icon" : "shopping-cart"
    },
    {
      "Name": "Alcohol",
      "Details": "of expenses",
      "Price": 0,
      "icon" : "beer"
    },
    {
      "Name": "Fast Food",
      "Details": "of expenses",
      "Price": 0,
      "icon" : "shopping-basket "
    },
    {
      "Name": "Bilss",
      "Details": "of expenses",
      "Price": 0,
      "icon" : "address-card"
    },
    {
      "Name": "Clothes",
      "Details": "sho bedak",
      "Price": 0,
      "icon" : "user-secret"
    }

  ];
  localStorage.setItem('myCat', JSON.stringify(this.categories));

  }
 getCategory(){
  let category = localStorage.getItem('myCat');
 
    return JSON.parse(category);
  }

}
