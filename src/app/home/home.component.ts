import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {WelcomeModalComponent} from "../modals/welcome-modal/welcome-modal.component";
import {WarningModalComponent} from "../modals/warning-modal/warning-modal.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  welcomeModal = localStorage.getItem('welcomeModal');

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.welcomeModal != 'hide'){
      localStorage.setItem('welcomeModal', 'hide')
      this.openWelcomeModal()
    }
  }


  openWelcomeModal(){
    this.dialog.open(WelcomeModalComponent);
  }

  openWarningModal(){
    this.dialog.open(WarningModalComponent);
  }

}
