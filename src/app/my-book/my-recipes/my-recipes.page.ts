import { Component } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-recipes',
  templateUrl: './my-recipes.page.html',
  styleUrls: ['./my-recipes.page.scss'],
})
export class MyRecipesPage {
  userEmail: string | null = null;
  recipes?: Observable<any[]>;

  constructor(private auth: Auth, private firestore: Firestore, private router: Router) {
    this.recipes = authState(this.auth).pipe(
      switchMap(user => {
        if (user?.email) {
          this.userEmail = user.email;
          const recipeCollection = collection(this.firestore, `users/${user.email}/recipes`);
          return collectionData(recipeCollection, { idField: 'id' });
        } else {
          return [];
        }
      })
    );
  }

  goToAddRecipe() {
    this.router.navigate(['/add-recipe']);
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
