import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepipes'
})
export class DatepipesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
