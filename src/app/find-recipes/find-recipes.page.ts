import { Component, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of } from 'rxjs';


interface Recipe {
  label: string;
  image: string;
  yield: number; // This represents the servings
  calories: number;
  ingredientLines: string[];
  url: string;
  totalNutrients: {
    PROCNT: { quantity: number }; // Protein
    FAT: { quantity: number };    // Fat
    CHOCDF: { quantity: number }; // Carbs
  };
}

interface RecipeApiResponse {
  hits: Array<{ recipe: Recipe }>;
}

@Component({
  selector: 'app-find-recipes',
  templateUrl: './find-recipes.page.html',
  styleUrls: ['./find-recipes.page.scss'],
})
export class FindRecipesPage {
  keyword: string | undefined;
  recipes: any[] = [];
  isSearched = false;
  searchError: string | undefined;


  constructor(private http: HttpClient, private cdRef: ChangeDetectorRef) { }

  searchByKeyword() {
    if (!this.keyword || this.keyword.trim().length === 0) {
      this.searchError = "Please enter a keyword to search.";
      this.recipes = []; // Reset the recipes list
      return;
    }

    this.searchError = undefined;
    this.isSearched = true;
    // Make API request with keyword
    const appId = '8477e31f';
    const appKey = '2124d71377fd57016c9ca4aa3e16263b\t';
    const url = `https://api.edamam.com/search?q=${this.keyword}&app_id=${appId}&app_key=${appKey}`;

    this.http.get<RecipeApiResponse>(url).pipe(
      catchError(error => {
        console.error('Error fetching recipes', error);
        return of(null); // Return an observable with a null value
      })
    ).subscribe(response => {
      if (response) {
        this.processResponse(response);
      }
    });
  }

  private processResponse(response: RecipeApiResponse) {
    this.recipes = response.hits.map(hit => hit.recipe);
  }
  resetError() {
    this.searchError = undefined;
    this.cdRef.detectChanges();
  }
}
