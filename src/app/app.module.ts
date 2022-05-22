import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirtyComponent } from './dirty.component';
import { LinkedInComponent } from './platform/linkedin/linkedIn.component';
import { MediumComponent } from './platform/medium/medium.component';
import { ScoopComponent } from './platform/scoop/scoop.component';
import { ArticleComponent } from './platform/article.component';
import { PlatformComponent } from './platform.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    DirtyComponent,
    LinkedInComponent,
    MediumComponent,
    ScoopComponent,
    PlatformComponent,
    ArticleComponent,
  ],
  bootstrap: [PlatformComponent],
  // bootstrap: [AppComponent],
  // bootstrap: [DirtyComponent],
})
export class AppModule {}
