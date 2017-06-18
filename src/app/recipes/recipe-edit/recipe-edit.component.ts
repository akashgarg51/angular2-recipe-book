import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { RecipeService } from "../recipe.service";

import { Subscription } from "rxjs/Rx";
import { Recipe } from "../recipe";
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

@Component({
    selector: 'rb-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
    recipeForm: FormGroup; 
    private recipeIndex: number;
    private recipe: Recipe;
    private isNew = true;
    private subscription: Subscription;

    constructor(private route: ActivatedRoute, 
    private recipeService: RecipeService,
    private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(
            (params: any) => {
                if (params.hasOwnProperty('id')) {   //to check if we are editing an existing recipe or a new recipe
                    this.isNew = false;
                    this.recipeIndex = +params['id']  //+ is added bcoz it will be string, to convert it into number
                    this.recipe = this.recipeService.getRecipe(this.recipeIndex);
                } else {
                    this.isNew = true;
                    this.recipe = null;
                }
                this.initForm();
            }
        );
    }
    
    ngOnDestroy() {
         this.subscription.unsubscribe();
    }
    
    private initForm() {
        let recipeName = '';
        let recipeImageUrl = ''; 
        let recipeContent = '';
        let recipeIngredients: FormArray = new FormArray([]);
        
        if(!this.isNew){
            for (let i=0; i < this.recipe.ingredients.length; i++){
                recipeIngredients.push(
                new FormGroup({
                       name: new FormControl(this.recipe.ingredients[i].name, Validators.required),
                       amount: new FormControl(this.recipe.ingredients[i].amount, [
                       Validators.required, 
                       Validators.pattern("\\d+") //it means it should be digit, means only numbers are allowed
                       ])
                    }));
            }
        }
        recipeName = this.recipe.name;
        recipeImageUrl = this.recipe.imagePath;
        recipeContent = this.recipe.description;
        
        this.recipeForm = this.formBuilder.group({
            name: [recipeName, Validators.required],
            imagePath: [recipeImageUrl, Validators.required],
            description: [recipeContent, Validators.required],
            ingredients: recipeIngredients
        });
    }

}
