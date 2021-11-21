import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  cats = []
  constructor(private snackBar: MatSnackBar, private http: Http) {

  }
  title = 'princesa-leia';


  public snackbar(msg: string, duration: number = 3000) {
    this.snackBar.open(msg, '', {
      duration: duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }

  private setCatsImages(){
    this.http.get('https://api.thecatapi.com/v1/images/search').subscribe(res => {
      // @ts-ignore
      this.cats.push(JSON.parse(res._body)[0].url)
    })
  }
  public getCatsImages (){
    return this.cats
  }
}
