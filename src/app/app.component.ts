import { Component } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private snackBar: MatSnackBar
  ) {
  }
  title = 'princesa-leia';


  public snackbar(msg: string, duration: number = 3000) {
    this.snackBar.open(msg, '', {
      duration: duration,
      verticalPosition: 'bottom',
      horizontalPosition: 'right',
    });
  }
}
