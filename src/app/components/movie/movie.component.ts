import { Component, Input } from '@angular/core';
import CinemaData from 'src/app/model/CinemaData';
import ScreenData from 'src/app/model/ScreenData';
import MovieData from 'src/app/model/MovieData';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent {

    @Input("movie") movie:MovieData = new MovieData(2,"some",new Date().getDate().toString(),2,new ScreenData(1,"imax",new CinemaData(2,"INOX")));

}
