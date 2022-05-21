import { Injectable } from '@angular/core';
import { MOVIES } from 'src/data/movies';
import { Movies } from '../models/movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  getMovies(): Movies[] {
  return MOVIES;
  }

  constructor() { }
}
