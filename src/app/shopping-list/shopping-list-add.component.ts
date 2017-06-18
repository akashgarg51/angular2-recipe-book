import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service"

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;   //Making it as input, so that this can be set from outside, mainly from shopping-list.component.ts
  isAdd = true;
    
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {   //whenever user clicks on new item, then item will be changed/updated accordingly, so this method will be called
      if(changes.item.currentValue === null){   //That would be initial stage
          this.isAdd = true;
      } else{
          this.isAdd = false;
      }
  }
  
  onSubmit(ingredient: Ingredient){  //As this form has name and amount so it would be of type Ingredient
      if(!this.isAdd){
          
      } else{
         this.item = new Ingredient(ingredient.name, ingredient.amount)
         this.sls.addItem(this.item);
      } 
  }
}
