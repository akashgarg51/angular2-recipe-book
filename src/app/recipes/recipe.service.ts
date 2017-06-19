import { Injectable } from '@angular/core';
import { Recipe } from "./recipe";
import { Ingredient } from "../shared/ingredient";
import { Headers, Http, Response } from "@angular/http";
import 'rxjs/Rx';

@Injectable()  //might be needed in scenarions where we want to some service in this service, e.g. we are injecting http
//service in this service here
export class RecipeService {
   private recipes: Recipe[] = [
     new Recipe('Cake', 'Very Tasty', 'https://s-media-cache-ak0.pinimg.com/736x/29/ee/96/29ee96df49e02fae0ecd190bff81adbb.jpg', [
       new Ingredient('Chocolate', 1),
       new Ingredient('Cherry', 2)   
           ]),
     new Recipe('Salad', 'Good', 'http://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/6/17/3/FNM080109Insert030_s4x3.jpg.rend.hgtvcom.1280.960.jpeg', [])
      ];
  constructor(private http: Http) {
      
  }

  getRecipes(){
    return this.recipes;    
  }
    
  getRecipe(id: number){
    return this.recipes[id];   
  }
    
  deleteRecipe(recipe: Recipe){
      this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
    
  addRecipe(recipe: Recipe){
      this.recipes.push(recipe);
  }
    
  editRecipe(oldRecipe: Recipe, newRecipe: Recipe){
      this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }
    
  storeData() {
      const body = JSON.stringify(this.recipes);
      const headers = new Headers({
          'Content-Type': 'application/json'
      })
      return this.http.put('https://recipebook-92f87.firebaseio.com/recipes.json', body, {
         headers: headers    
      });
  }
    
  fetchData() {
      return this.http.get('https://recipebook-92f87.firebaseio.com/recipes.json').map((response: Response) => response.json())
      .subscribe(
          (data: Recipe[]) => {
               this.recipes = data;
           }
          );
  }
}
