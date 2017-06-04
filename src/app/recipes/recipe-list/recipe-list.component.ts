import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  recipe = new Recipe('Dummy', 'Dummy', 'http://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/2j8AAOSwGYVXCsiv/$_1.JPG');
  
  constructor() { }

  ngOnInit() {
  }

}
