import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { PostAuthorRequestAction, PutAuthorRequestAction } from '../../actions/authors.actions';
import { PostRecipeRequestAction, PutRecipeRequestAction } from '../../actions/recipe-detail.actions';
import { AuthorDataModel, AuthorModel } from '../../models/api/author.model';
import { IngredientModel } from '../../models/api/ingredient.model';
import { RecipeModel } from '../../models/api/recipe.model';
import { AppStateModel } from '../../models/helper/app-state.model';
import { AuthorDialogDataModel } from '../../models/helper/author-dialog-data.model';
import { $authorById } from '../../selectors/authors.selectors';

enum AuthorFormKey {
  Name = 'Name',
  Email = 'Email',
  Avatar = 'Avatar'
}

@Component({
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.scss']
})
export class AuthorFormComponent implements OnInit {
  readonly AuthorFormKey = AuthorFormKey;

  authorForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public readonly dialogData: AuthorDialogDataModel,
              private readonly dialogRef: MatDialogRef<AuthorFormComponent>,
              private readonly store: Store<AppStateModel>,
              private readonly fb: FormBuilder) { }

  async ngOnInit(): Promise<void> {
    const {authorId} = this.dialogData;
    const author = authorId != null ?
        await this.store
            .pipe(select($authorById(authorId)), take(1))
            .toPromise() :
        null;

    this.authorForm = this.fb.group({
      [AuthorFormKey.Name]: [author != null ? author.name : '', Validators.required],
      [AuthorFormKey.Email]: [author != null ? author.email : '', Validators.required],
      [AuthorFormKey.Avatar]: author != null ? author.avatar : '',
    });
  }

  submitAuthor(): void {
    const {value} = this.authorForm;

    const authorData: AuthorDataModel = {
      name: value[AuthorFormKey.Name],
      email: value[AuthorFormKey.Email],
      avatar: value[AuthorFormKey.Avatar],
    };

    const {authorId} = this.dialogData;

    this.store.dispatch(
        authorId != null ?
            new PutAuthorRequestAction(authorId, authorData) :
            new PostAuthorRequestAction(authorData)
    );

    // const recipe: RecipeModel = {
    //   title: value[RecipeFormKey.Title],
    //   authorIds: value[RecipeFormKey.Authors],
    //   ingredients: value[RecipeFormKey.Ingredients]
    //       .map((ingredientValue): IngredientModel => ({
    //         name: ingredientValue[IngredientFormKey.Name],
    //         amount: ingredientValue[IngredientFormKey.Amount],
    //         ...ingredientValue[IngredientFormKey.Amount] && {
    //           unit: ingredientValue[IngredientFormKey.Amount]
    //         }
    //       })),
    //   text: value[RecipeFormKey.Text],
    //   imageUrl: value[RecipeFormKey.Image]
    // };
    //
    // const {recipeId} = this.dialogData;
    // this.store.dispatch(
    //     recipeId != null ?
    //         new PutRecipeRequestAction(recipeId, recipe) :
    //         new PostRecipeRequestAction(recipe)
    // );
    this.closeDialog();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
