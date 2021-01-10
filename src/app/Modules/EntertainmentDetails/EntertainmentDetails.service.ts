import { MovieDetailsService } from './../../Core/API/MovieDetails.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EntertainmentDetailsService {
  constructor(private apiService: MovieDetailsService) {}
}
