import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDzA_GZ6N-EfI6DpzyR50cH1p5rbGEbbX0",
      authDomain: "ng-recipe-book-4a028.firebaseapp.com"
    })
  }
  
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
