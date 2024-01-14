import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'

import {TabsPage} from './tabs.page'

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'find-recipes',
        loadChildren: () => import('../find-recipes/find-recipes.module').then(m => m.FindRecipesPageModule)
      },
      {
        path: 'my-book',
        loadChildren: () => import('../my-book/my-book.module').then(m => m.MyBookPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
