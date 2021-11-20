import { Component, OnInit } from '@angular/core';
import songs from '../../assets/jsons/music-list.json';
@Component({
  selector: 'app-recomendations',
  templateUrl: './recomendations.component.html',
  styleUrls: ['./recomendations.component.scss']
})
export class RecomendationsComponent implements OnInit {

  expand = -1
  songs = songs
  constructor() { }
  ngOnInit(): void {
  }
}
