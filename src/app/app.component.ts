import { Component, VERSION } from '@angular/core';

export enum MediaType {
  medium,
  linkedIn,
  scoop,
}

export class Articles {
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
  data: Articles = {
    type: null,
    items: [
      {
        title: 'Angular is Awesome',
        description: 'Angular is one of the most famous frontend framework',
      },
      {
        title: 'Angular is better than React? ...',
        description: 'It all comes down to the business needs',
      },
    ],
  };
  //type selected from three buttons
  typeSelected: MediaType;

  /**
   * Change the view based on the medium type selected
   */
  onMediumChanged(type: MediaType) {
    this.data.type = type;
  }
}
