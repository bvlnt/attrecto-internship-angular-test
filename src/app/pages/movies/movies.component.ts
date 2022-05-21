import { Component, OnInit } from '@angular/core';
import { Movies } from 'src/app/models/movies';
import { MoviesService } from 'src/app/services/movies.service';
import { MOVIES } from 'src/data/movies';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Movies[] = [];;

  getMovies(): void {
  this.movies = this.moviesService.getMovies();
  }

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
  this.getMovies();
  }

}
