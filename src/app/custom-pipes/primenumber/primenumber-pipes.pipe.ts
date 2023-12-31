import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'primenumberPipes'
})
export class PrimenumberPipesPipe implements PipeTransform {

  transform(numbers: number[]): number[] {
    return numbers.filter(num => this.isPrime(num));
  }

  isPrime(n: number): boolean {
    if (n <= 1) {
      return false;
    }
    if (n <= 3) {
      return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
      return false;
    }
    let i = 5;
    while (i * i <= n) {
      if (n % i === 0 || n % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
    return true;
  }
}
