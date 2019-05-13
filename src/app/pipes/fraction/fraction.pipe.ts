import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'appFraction'
})
export class FractionPipe implements PipeTransform {
  private readonly fractionChars: {[fraction: string]: string} = {
    '1/4': '\u00BC',
    '1/2': '\u00BD',
    '3/4': '\u00BD'
  };

  transform(value: unknown): string {
    const stringValue = String(value);
    return this.fractionChars[stringValue] || stringValue;
  }
}
