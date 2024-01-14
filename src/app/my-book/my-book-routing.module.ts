import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyBookPage } from './my-book.page';

const routes: Routes = [
  {
    path: '',
    component: MyBookPage
  },
  {
    path: 'my-recipes',
    loadChildren: () => import('./my-recipes/my-recipes.module').then( m => m.MyRecipesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyBookPageRoutingModule {}
