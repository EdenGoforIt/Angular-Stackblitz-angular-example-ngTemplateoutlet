import { Component, OnInit } from '@angular/core';
import { Article } from '../../article';

@Component({
  selector: 'app-scoop',
  templateUrl: './scoop.component.html',
})
export class ScoopComponent {
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
}
