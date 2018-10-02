import { CategoryDataService } from './../../category-data.service';
import { ICategory } from './../../Icategeory';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  // u are not caling this component anywhere no need for this line , u dont pass any data as input
  //@Input() category: Array < ICategory> ;
  category = [];
  
  constructor(private catService:CategoryDataService) { }

  ngOnInit() {
    this.getCategories();
    console.log(/*"my list ",this.category*/);
    
  }
 
  getCategories(){
    this.category = this.catService.getCategory();
  }

}
