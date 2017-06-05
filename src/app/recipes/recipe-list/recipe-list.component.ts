import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  recipe = new Recipe('Dummy', 'Dummy', 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/2j8AAOSwGYVXCsiv/$_1.JPG');
  
  constructor() { }

  ngOnInit() {
  }
  
  onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  }    
}
