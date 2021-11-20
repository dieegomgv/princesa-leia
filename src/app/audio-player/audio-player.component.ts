import {Component, Inject, Input, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AppComponent} from "../app.component";

@Component({
  selector: 'audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss']
})
export class AudioPlayerComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: any, private appComponent: AppComponent) {
  }

  private _currentSong: any;
  @Input()
  set currentSong(currentSong) {
    this._currentSong = currentSong;
  }

  get currentSong() {
    return this._currentSong;
  }

  selection: any;

  audioPlayer: any;
  outline: any;
  outlineLength: any;
  timeDisplay: any;
  isPlaying: boolean = false;

  playAudio() {

    console.log(this.selection)
    this.appComponent.snackbar('Debes de seleccionar la duración')
    /*   if (this.audioPlayer.paused) {
         this.audioPlayer.play();
         this.isPlaying = true;
       } else {
         this.audioPlayer.pause();
         this.isPlaying = false;
       }*/
  }


  ngOnInit() {

  }
}
