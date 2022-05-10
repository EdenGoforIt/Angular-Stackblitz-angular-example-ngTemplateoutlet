import { Component, VERSION } from '@angular/core';

export enum MediaType {
  medium,
  linkedIn,
  scoop,
}

export class Article {
  type: MediaType;
  items: { title: string; description: string }[];
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //to use enum in html
  mediaType: typeof MediaType = MediaType;
  //data initialization
  data: Article[] = [];
  //type selected from three buttons
  typeSelected: MediaType;

  /**
   * Change the view based on the medium type selected
   */
  onMediumChanged(type: MediaType) {
    this.typeSelected = type;
  }
}
