import { Component } from '@angular/core';
import CinemaData from 'src/app/model/CinemaData';
import MovieData from 'src/app/model/MovieData';
import ScreenData from 'src/app/model/ScreenData';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {

  movies:MovieData[] = [];

  ngOnInit():void{

    this.movies = [
      new MovieData(2,"some",new Date().getDate().toString(),2,new ScreenData(1,"imax",new CinemaData(2,"INOX"))),

      new MovieData(3,"MI7",new Date().getDate().toString(),2,new ScreenData(1,"imax",new CinemaData(2,"PVR")))
    ];
    
  }


}
