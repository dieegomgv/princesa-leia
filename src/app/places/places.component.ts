import { Component, OnInit } from '@angular/core';
import places from '../../assets/jsons/places-list.json';

@Component({
  selector: 'app-places',
  templateUrl: './places.component.html',
  styleUrls: ['./places.component.scss']
})
export class PlacesComponent implements OnInit {

  expand = -1
  places = places
  constructor() { }

  ngOnInit(): void {
  }

}
