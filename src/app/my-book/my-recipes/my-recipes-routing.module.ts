import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyRecipesPage } from './my-recipes.page';

const routes: Routes = [
  {
    path: '',
    component: MyRecipesPage
  },
  {
    path: 'my-recipe/add-recipe',
    loadChildren: () => import('./add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyRecipesPageRoutingModule {}
