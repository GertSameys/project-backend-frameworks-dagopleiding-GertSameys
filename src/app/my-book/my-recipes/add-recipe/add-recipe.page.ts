import {Component} from '@angular/core'
import {addDoc, collection, Firestore} from '@angular/fire/firestore'
import {getDownloadURL, ref, Storage, uploadBytes} from '@angular/fire/storage'
import {Auth, authState} from '@angular/fire/auth'
import {first} from 'rxjs/operators'
import {Router} from '@angular/router'


@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage {
  userEmail: string | null = null;
  recipe = {
    name: '',
    time: '',
    ingredients: [],
    steps: '',
    photo: ''  // Add the photo property
  };
  constructor(private firestore: Firestore,
              private storage: Storage,
              private auth: Auth,
              private router: Router) {
    // Get the user's email from the authentication state
    authState(this.auth).pipe(first()).subscribe(user => {
      if (user) {
        this.userEmail = user.email;
      }
    });
  }

  async addRecipe() {
    if (!this.userEmail) {
      console.error('No user email found');
      return;
    }

    const recipeCollection = collection(this.firestore, 'users', this.userEmail, 'recipes');
    try {
      const docRef = await addDoc(recipeCollection, this.recipe);
      console.log('Recipe added successfully', docRef.id);
      // Navigate to "My Recipes" page after successful addition
      this.router.navigate(['/my-book/my-recipes']);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  }

  async uploadPhoto(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const filePath = `recipes/${new Date().getTime()}_${file.name}`;
    const fileRef = ref(this.storage, filePath);

    try {
      const result = await uploadBytes(fileRef, file);
      const photoURL = await getDownloadURL(result.ref);
      this.recipe.photo = photoURL;  // Store photo URL in the recipe object
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  }

  cancel() {
    this.router.navigate(['/my-book/my-recipes']); // Update with the correct path if different
  }

}
