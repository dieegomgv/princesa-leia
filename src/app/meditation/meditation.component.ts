import {Component, Inject, Input, OnDestroy, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-meditation',
  templateUrl: './meditation.component.html',
  styleUrls: ['./meditation.component.scss']
})
export class MeditationComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: any, private appComponent: AppComponent) {
  }
  audio = new Audio();
  private _currentSong: any;
  @Input()
  set currentSong(currentSong) {
    this._currentSong = currentSong;
  }

  get currentSong() {
    return this._currentSong;
  }

  selection: any;

  isPlaying: boolean = false;

  playAudio() {
    if (this.selection){
      this.audio.src = "../assets/audios/meditation/meditacion-" + this.selection + '.mp3';
      this.audio.load();
      this.audio.play();
    } else
      this.appComponent.snackbar('Debes de seleccionar la duración')
  }


  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.audio.pause()
  }


}
