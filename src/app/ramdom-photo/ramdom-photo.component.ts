import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import {AppComponent} from "../app.component";
import {Http} from "@angular/http";

@Component({
  selector: 'app-ramdom-photo',
  templateUrl: './ramdom-photo.component.html',
  styleUrls: ['./ramdom-photo.component.scss']
})
export class RamdomPhotoComponent implements OnInit, AfterViewInit {

  slideIndex = 1;
  cats = []
  loading = true;

  constructor(private appComponent: AppComponent, private cd: ChangeDetectorRef, private http: Http) {

    this.refreshCats();
  }

  ngOnInit(): void {
  }

  private setCatsImages() {
      this.http.get('https://api.thecatapi.com/v1/images/search').subscribe(res => {
        // @ts-ignore
        this.cats.push(JSON.parse(res._body)[0].url)
      })
  }


  plusSlides(n: any) {
    this.showSlides(this.slideIndex += n);
  }

  showSlides(n: any) {
    this.cd.detectChanges()

    this.loading = false
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
      this.slideIndex = 1
    }
    if (n < 1) {
      this.slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      // @ts-ignore
      slides[i].style.display = "none";
    }
    // @ts-ignore
    slides[this.slideIndex - 1].style.display = "block";
  }

  ngAfterViewInit(): void {
  }

  refreshCats(){
    this.loading = true;
    this.cats = []
    for(var i = 0; i < 15; i++){
      this.setCatsImages()
    }
    this.showSlidesTimeout()
  }

  showSlidesTimeout(){
    setTimeout(() => {
      this.showSlides(this.slideIndex)
    }, 10000)
  }


}
