import { Action } from '@ngrx/store';
import { AuthorDataModel, AuthorModel } from '../models/api/author.model';

export class GetAuthorsRequestAction implements Action {
  static readonly type = 'GetAuthorsRequest';
  readonly type = GetAuthorsRequestAction.type;
}

export class GetAuthorsSuccessAction implements Action {
  static readonly type = 'GetAuthorsSuccess';
  readonly type = GetAuthorsSuccessAction.type;

  constructor(public readonly authors: AuthorModel[]) { }
}

export class PostAuthorRequestAction implements Action {
  static readonly type = 'PostAuthorRequest';
  readonly type = PostAuthorRequestAction.type;

  constructor(public readonly author: AuthorDataModel) { }
}

export class PostAuthorSuccessAction implements Action {
  static readonly type = 'PostAuthorSuccess';
  readonly type = PostAuthorSuccessAction.type;

  constructor(public readonly author: AuthorModel) { }
}

export class PutAuthorRequestAction implements Action {
  static readonly type = 'PutAuthorRequest';
  readonly type = PutAuthorRequestAction.type;

  constructor(public readonly id: string,
              public readonly author: AuthorDataModel) { }
}

export class PutAuthorSuccessAction implements Action {
  static readonly type = 'PutAuthorSuccess';
  readonly type = PutAuthorSuccessAction.type;

  constructor(public readonly author: AuthorModel) { }
}

export type AuthorsActions
  = GetAuthorsRequestAction
  | GetAuthorsSuccessAction
  | PostAuthorRequestAction
  | PostAuthorSuccessAction
  | PutAuthorRequestAction
  | PutAuthorSuccessAction
    ;
