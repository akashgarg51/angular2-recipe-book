import { NgModule } from "@angular/core";
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingListAddComponent } from './shopping-list-add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ShoppingListComponent, ShoppingListAddComponent],
    imports: [FormsModule, CommonModule]   //Common module is added here, because we need browser module but that is only 
    //available in add module and its components, because it don't traverse down, so we need to add it here specifically.
})
export class ShoppingListModule {
    
}