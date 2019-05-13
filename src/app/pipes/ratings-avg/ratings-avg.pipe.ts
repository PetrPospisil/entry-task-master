import { Pipe, PipeTransform } from '@angular/core';
import { RatingModel } from '../../models/api/rating.model';

@Pipe({
  name: 'ratingsAvg'
})
export class RatingsAvgPipe implements PipeTransform {

  transform(ratings: RatingModel[]): number {

    const sum = ratings.reduce((acc, c) => acc + c.rating, 0);
    const avg = ratings.length !== 0 ? sum / ratings.length : 0;

    console.log(JSON.stringify(ratings) + ' ' + sum.toString() + ' ' + avg.toString());
    return avg;
  }

}
