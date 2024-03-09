import { NgModule } from "@angular/core";
import { Route, RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { ReciepEditComponent } from "./recipes/reciep-edit/reciep-edit.component";
// array of js object
const appRoutes : Routes = [
    {
        path: '',redirectTo: '/recipes',pathMatch: 'full'
    },
    {
        path: 'recipes', component: RecipesComponent,
        children: [
            { path: '' , component: RecipeStartComponent},
            { path: 'new', component: ReciepEditComponent},
            { path: ':id' , component: RecipeDetailComponent},
            { path: ':id/edit', component: ReciepEditComponent}
        ]
    },
    {
        path: 'shopping-list',component: ShoppingListComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}