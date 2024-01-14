import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'
import {IonicModule} from '@ionic/angular'
import {MyRecipesPageRoutingModule} from './my-recipes-routing.module'
import {MyRecipesPage} from './my-recipes.page'
import {RouterModule} from '@angular/router'
import {AngularFirestoreModule} from '@angular/fire/compat/firestore' // Import AngularFirestoreModule

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyRecipesPageRoutingModule,
    RouterModule.forChild([{ path: '', component: MyRecipesPage }]),
    AngularFirestoreModule, // Add AngularFirestoreModule here
  ],
  declarations: [MyRecipesPage]
})
export class MyRecipesPageModule {}
