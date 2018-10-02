import { CategoryDataService } from './../../category-data.service';
import { ICategory } from './../../Icategeory';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
  /*
btnClick= function () {
  this.router.navigate(['']);
};
*/

@Component({
  selector: 'app-add-layout',
  templateUrl: './add-layout.component.html',
  styleUrls: ['./add-layout.component.scss']
})

export class AddLayoutComponent implements OnInit {
  // @Input() category: Array < ICategory > ;
 categoryPrice  :number;

  category=[];
  constructor(private catService:CategoryDataService) { 
    this.getCategories();
  }

  ngOnInit() {
    console.log("my list ",this.category);
  }
  addExpenses(cat) {
    
    let categoryPrice = cat.price;
    }
    getTotal()
      {
        let total_expanses = 0;
        for (let index in this.category) {
          total_expanses += this.category[index].price;
        };
    
        return total_expanses;
      }

    add(amount){
      let newPrice =  amount + this.categoryPrice;
      this.category = this.catService.getCategory();
      let total = this.getTotal();      
      let precentage = (newPrice/total)*100;
      }
  getCategories(){
    this.category = this.catService.getCategory();
  }

}


