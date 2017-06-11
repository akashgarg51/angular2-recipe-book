import { Injectable } from '@angular/core';

import { Recipe } from "./recipe";
@Injectable()
export class RecipeService {
   private recipes: Recipe[] = [
     new Recipe('Cake', 'Very Tasty', 'https://s-media-cache-ak0.pinimg.com/736x/29/ee/96/29ee96df49e02fae0ecd190bff81adbb.jpg', []),
     new Recipe('Salad', 'Good', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/3/FNM080109Insert030_s4x3.jpg.rend.hgtvcom.1280.960.jpeg', [])
      ];
  constructor() { }

  getRecipes(){
    return this.recipes;    
  }
}
