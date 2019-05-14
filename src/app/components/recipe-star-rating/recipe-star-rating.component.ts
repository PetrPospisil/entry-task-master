import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClickEvent } from 'angular-star-rating';
import { RatingModel } from '../../models/api/rating.model';

@Component({
  selector: 'app-recipe-star-rating',
  templateUrl: './recipe-star-rating.component.html',
  styleUrls: ['./recipe-star-rating.component.scss']
})
export class RecipeStarRatingComponent implements OnInit {

  @Input() ratings: RatingModel[];
  @Input() recipeId: string;
  @Output() onRate: EventEmitter<RatingModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick = ($event: ClickEvent) => {
    const ratingModel: RatingModel = {
      recipeId: this.recipeId,
      rating: $event.rating,
    };

    this.onRate.emit(ratingModel);
  };

}
