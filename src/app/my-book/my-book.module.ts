import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms'

import {IonicModule} from '@ionic/angular'

import {MyBookPageRoutingModule} from './my-book-routing.module'

import {MyBookPage} from './my-book.page'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyBookPageRoutingModule
  ],
  declarations: [MyBookPage]
})
export class MyBookPageModule {}
