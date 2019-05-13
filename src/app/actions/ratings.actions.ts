import { Action } from '@ngrx/store';
import { RatingModel } from '../models/api/rating.model';

export class GetRatingsRequestAction implements Action {
    static readonly type = 'GetRatingsRequest';
    readonly type = GetRatingsRequestAction.type;
}

export class GetRatingsSuccessAction implements Action {
    static readonly type = 'GetRatingsSuccess';
    readonly type = GetRatingsSuccessAction.type;

    constructor(public readonly ratings: RatingModel[]) { }
}

export class PostRatingRequestAction implements Action {
    static readonly type = 'PostRatingRequest';
    readonly type = PostRatingRequestAction.type;

    constructor(public readonly rating: RatingModel) { }
}

export class PostRatingSuccessAction implements Action {
    static readonly type = 'PostRatingSuccess';
    readonly type = PostRatingSuccessAction.type;

    constructor(public readonly rating: RatingModel) { }
}

export type RatingsActions
    = GetRatingsRequestAction
    | GetRatingsSuccessAction
    | PostRatingRequestAction
    | PostRatingSuccessAction
    ;
