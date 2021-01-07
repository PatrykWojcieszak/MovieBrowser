import { Pipe, PipeTransform } from '@angular/core';
import Genres from 'src/app/Other/GenresEnum';

@Pipe({
  name: 'GetGenre',
})
export class GetGenrePipe implements PipeTransform {
  transform(genreId: number, args?: any): any {
    if (Genres[genreId]) return `${Genres[genreId]}, `;
    else return '';
  }
}
