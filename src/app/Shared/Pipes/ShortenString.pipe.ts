import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ShortenString',
})
export class ShortenStringPipe implements PipeTransform {
  transform(value: string, numberOfCharacters: number): string {
    return `${value.slice(0, numberOfCharacters)}...`;
  }
}
