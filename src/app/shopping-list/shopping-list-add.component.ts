import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient";
import { ShoppingListService } from "./shopping-list.service"

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnChanges {
  @Input() item: Ingredient;   //Making it as input, so that this can be set from outside, mainly from shopping-list.component.ts
  @Output() cleared = new EventEmitter();
  isAdd = true;
    
  constructor(private sls: ShoppingListService) { }

  ngOnChanges(changes) {   //whenever user clicks on new item, then item will be changed/updated accordingly, so this method will be called
      if(changes.item.currentValue === null){   //That would be initial stage
          this.isAdd = true;
          this.item = {name: null, amount:null} //We are doing this because in view we set [ngModel] = item.name which
          //will give error because item is initially null here, so we are changing its value to some object
          this.onClear();
      } else{
          this.isAdd = false;
      }
  }
  
  onSubmit(ingredient: Ingredient){  //As this form has name and amount so it would be of type Ingredient
      const newIngredient = new Ingredient(ingredient.name, ingredient.amount);
      if(!this.isAdd){
          this.sls.editItem(this.item, newIngredient);
      } else{
         this.item = newIngredient;
         this.sls.addItem(this.item);
      } 
  }
    
  onDelete() {
      this.sls.deleteItem(this.item);
      this.onClear();
  }
    
  onClear() {
      this.isAdd = true;
      this.cleared.emit(null);
  }
}
