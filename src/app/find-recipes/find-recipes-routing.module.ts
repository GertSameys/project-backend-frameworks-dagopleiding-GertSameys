import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {FindRecipesPage} from './find-recipes.page'

const routes: Routes = [
  {
    path: '',
    component: FindRecipesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindRecipesPageRoutingModule {}
