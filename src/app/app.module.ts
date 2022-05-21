import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirtyComponent } from './dirty.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, DirtyComponent],
  bootstrap: [DirtyComponent],
  // bootstrap: [AppComponent],
})
export class AppModule {}
