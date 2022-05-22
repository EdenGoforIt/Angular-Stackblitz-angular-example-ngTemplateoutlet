import { Component, Input, TemplateRef } from '@angular/core';

import { OnInit, AfterViewInit } from '@angular/core';
import { MediaType } from '../article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() contents: { title: string; description: string; img: string }[];
  @Input('template') templateRef: TemplateRef<any>;
  @Input() typeSelected: MediaType;
  //to use enum in html
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

  ngOnInit() {
    // console.log(this.items);
    // console.log(this.template);
  }
  ngAfterViewInit(): void {
    console.log(this.templateRef);
    console.log(this.contents);
  }
  /**
   * Change the view based on the medium type selected
   */
}
