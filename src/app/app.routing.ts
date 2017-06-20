import { RouterModule, Routes } from '@angular/router';
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { HomeComponent } from "./home.component";

export const APP_ROUTES_PROVIDERS = [
      {path: '', component: HomeComponent},   //Default routing to recipes is removed, as we want to implement lazy loading
      {path: 'recipes', loadChildren: 'app/recipes/recipes.module#RecipesModule'},    //removed RecipesComponent and children from here in optimization, because will implement lazy loading
      //This load children is something that we need to remember, it should start from the app path
      {path: 'shopping-list', component: ShoppingListComponent}
];