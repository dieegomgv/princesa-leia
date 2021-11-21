import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeditationComponent } from './meditation/meditation.component';
import { PlacesComponent } from './places/places.component';
import { LandScreenComponent } from './land-screen/land-screen.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { HoneyComponent } from './honey/honey.component';
import { WelcomeModalComponent } from './modals/welcome-modal/welcome-modal.component';
import { WarningModalComponent } from './modals/warning-modal/warning-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from "@angular/material/dialog";
import {MatListModule} from "@angular/material/list";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import { AudioPlayerComponent } from './audio-player/audio-player.component';
import { RamdomPhotoComponent } from './ramdom-photo/ramdom-photo.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {HttpModule} from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeditationComponent,
    PlacesComponent,
    LandScreenComponent,
    RecomendationsComponent,
    HoneyComponent,
    WelcomeModalComponent,
    WarningModalComponent,
    AudioPlayerComponent,
    RamdomPhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatListModule,
    FontAwesomeModule,
    MatIconModule,
    MatSnackBarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
