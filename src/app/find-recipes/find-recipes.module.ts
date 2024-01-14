import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {IonicModule} from '@ionic/angular'

import {FindRecipesPageRoutingModule} from './find-recipes-routing.module'

import {FindRecipesPage} from './find-recipes.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindRecipesPageRoutingModule
  ],
  declarations: [FindRecipesPage]
})
export class FindRecipesPageModule {}
