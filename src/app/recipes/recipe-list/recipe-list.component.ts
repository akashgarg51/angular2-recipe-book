import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe';
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
/*     recipes: Recipe[] = [
     new Recipe('Cake', 'Very Tasty', 'https://s-media-cache-ak0.pinimg.com/736x/29/ee/96/29ee96df49e02fae0ecd190bff81adbb.jpg', []),
     new Recipe('Salad', 'Good', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/3/FNM080109Insert030_s4x3.jpg.rend.hgtvcom.1280.960.jpeg', [])
      ];    */
    
  recipes: Recipe[] = [];
//  @Output() recipeSelected = new EventEmitter<Recipe>();
// recipe = new Recipe('Dummy', 'Dummy', 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/2j8AAOSwGYVXCsiv/$_1.JPG', []);
  
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
      this.recipes = this.recipeService.getRecipes();
      this.recipeService.recipesChanged.subscribe(
        (recipes: Recipe[]) => this.recipes = recipes
      );
  }
  
 /* onSelected(recipe: Recipe){
      this.recipeSelected.emit(recipe);
  } */    
}
