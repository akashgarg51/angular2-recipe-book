import { Component, OnInit } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service"

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {
  item: Ingredient;
  isAdd = true;
    
  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }
  
  onSubmit(ingredient: Ingredient){  //As this form has name and amount so it would be of type Ingredient
      if(!this.isAdd){
          
      } else{
         this.item = new Ingredient(ingredient.name, ingredient.amount)
         this.sls.addItem(this.item);
      }
  }
}
