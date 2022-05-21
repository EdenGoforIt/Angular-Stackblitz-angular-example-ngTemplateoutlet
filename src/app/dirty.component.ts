import { Component, Input } from '@angular/core';
import { MediaType, Article } from './article';
@Component({
  selector: 'app-dirty',
  templateUrl: './dirty.component.html',
})
export class DirtyComponent {
  //to use enum in html
  mediaType: typeof MediaType = MediaType;
  //data initialization
  data: Article = {
    type: null,
    contents: [
      {
        title: 'Angular is Awesome',
        description: 'Angular is one of the most famous frontend framework',
        img: 'https://picsum.photos/50/50',
      },
      {
        title: 'Angular is better than React? ...',
        description: 'It all comes down to the business needs',
        img: 'https://picsum.photos/50/50',
      },
    ],
  };
  //type selected from three buttons
  typeSelected: MediaType;

  /**
   * Change the view based on the medium type selected
   */
  onMediaChanged(type: MediaType) {
    this.data.type = type;
  }
}
