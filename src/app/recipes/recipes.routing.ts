import { RecipeStartComponent } from "./recipe-start.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipesComponent } from "./recipes.component";
import { RouterModule } from '@angular/router';

const RECIPE_ROUTES = [                                 //In optimization 17_01 06 lecture, remove export from here
      {path: '', component: RecipesComponent, children: [   //We had to add this extra as as router-outlet is part of recipes.component.html
      {path: '', component: RecipeStartComponent},
      {path: 'new', component: RecipeEditComponent},
      {path: ':id', component: RecipeDetailComponent},
      {path: ':id/edit', component: RecipeEditComponent}
      ]}
];
export const recipesRouting = RouterModule.forChild(RECIPE_ROUTES)
//dont use forRoot twice in an application because it tries to load root routes, which we already write once, so use forChild