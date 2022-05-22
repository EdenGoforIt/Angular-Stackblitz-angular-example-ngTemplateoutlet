import { Component, Input, TemplateRef } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
})
export class ArticleComponent {
  @Input() contents: { title: string; description: string; img: string }[];
  @Input('template') templateRef: TemplateRef<any>;
}
