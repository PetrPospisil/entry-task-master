import {
  AuthorsActions,
  GetAuthorsRequestAction,
  GetAuthorsSuccessAction,
  PostAuthorRequestAction, PostAuthorSuccessAction,
  PutAuthorRequestAction, PutAuthorSuccessAction
} from '../actions/authors.actions';
import { AuthorsState } from '../models/helper/app-state.model';

const INITIAL_STATE: AuthorsState = {
  data: [],
  loading: false
};

export function authorsReducer(state: AuthorsState = INITIAL_STATE,
                               action: AuthorsActions): AuthorsState {
  switch (action.type) {
    case GetAuthorsRequestAction.type:
    case PutAuthorRequestAction.type:
    case PostAuthorRequestAction.type:
      return {
        ...state,
        loading: true
      };

    case GetAuthorsSuccessAction.type:
      return {
        ...state,
        data: action.authors,
        loading: false
      };

    case PostAuthorSuccessAction.type:
      return {
        ...state,
        data: [...state.data, action.author],
        loading: false
      };

    case PutAuthorSuccessAction.type:
      return {
        ...state,
        data: state.data.map((author, _) => author.id === action.author.id ? action.author : author),
        loading: false
      };

    default:
      return state;
  }
}
