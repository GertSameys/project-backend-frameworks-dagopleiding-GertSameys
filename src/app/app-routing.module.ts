import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
  path: 'my-book',
  loadChildren: () => import('./my-book/my-book.module').then( m => m.MyBookPageModule)
  },
  {
    path: 'my-book/my-recipes',
    loadChildren: () => import('./my-book/my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
  },
  {
    path: 'add-recipe',
    loadChildren: () => import('./my-book/my-recipes/add-recipe/add-recipe.module').then( m => m.AddRecipePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
