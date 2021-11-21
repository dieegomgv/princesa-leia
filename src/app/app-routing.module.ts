import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LandScreenComponent} from "./land-screen/land-screen.component";
import {PlacesComponent} from "./places/places.component";
import {MeditationComponent} from "./meditation/meditation.component";
import {RecomendationsComponent} from "./recomendations/recomendations.component";
import {RamdomPhotoComponent} from "./ramdom-photo/ramdom-photo.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'meditation', component: MeditationComponent },
  { path: 'recomendations', component: RecomendationsComponent },
  { path: 'random-photo', component: RamdomPhotoComponent },
  {path: '', component: LandScreenComponent},
  {path: '**', component: LandScreenComponent}
  //{ path: 'honey', component: HoneyComponent },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
