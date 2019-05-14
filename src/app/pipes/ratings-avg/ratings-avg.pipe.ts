import { Pipe, PipeTransform } from '@angular/core';
import { RatingModel } from '../../models/api/rating.model';

@Pipe({
  name: 'ratingsAvg'
})
export class RatingsAvgPipe implements PipeTransform {

  transform(ratings: RatingModel[]): number {
    return ratings.length !== 0 ? ratings.reduce((acc, c) => acc + c.rating, 0) / ratings.length : 0;;
  }

}
