import { Component, Input, TemplateRef } from '@angular/core';

import { OnInit, AfterViewInit } from '@angular/core';
import { MediaType } from '../article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() items: { title: string; description: string; img: string }[];
  @Input('template') templateRef: TemplateRef<any>;
  //to use enum in html
  mediaType: typeof MediaType = MediaType;
  //data initialization
  // data: Article = {
  //   type: null,
  //   contents: [
  //     {
  //       title: 'Angular is Awesome',
  //       description: 'Angular is one of the most famous frontend framework',
  //       img: 'https://picsum.photos/50/50',
  //     },
  //     {
  //       title: 'Angular is better than React? ...',
  //       description: 'It all comes down to the business needs',
  //       img: 'https://picsum.photos/50/50',
  //     },
  //   ],
  // };
  //type selected from three buttons
  typeSelected: MediaType;

  ngOnInit() {
    // console.log(this.items);
    // console.log(this.template);
  }
  ngAfterViewInit(): void {
    console.log(this.templateRef);
    console.log(this.items);
  }
  /**
   * Change the view based on the medium type selected
   */
  onMediaChanged(type: MediaType) {
    console.log(type);
    // this.data.type = type;
  }
}
