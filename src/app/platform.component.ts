import { Component } from '@angular/core';
import { MediaType } from './article';

@Component({
  selector: 'app-platform',
  template: `
  <div class="btn-group w-100" role="group" aria-label="Basic example">
  <button
    type="button"
    class="btn btn-primary"
    (click)="onMediaChanged(mediaType.medium)"
  >
    Medium
  </button>
  <button
    type="button"
    class="btn btn-sucess"
    (click)="onMediaChanged(mediaType.linkedIn)"
  >
    LinkedIn
  </button>
  <button
    type="button"
    class="btn btn-warning"
    (click)="onMediaChanged(mediaType.scoop)"
  >
    Scoop
  </button>
 </div>

  <!-- Media starts here -->
  <app-scoop></app-scoop>
  `,
})

// <app-medium></app-medium>
// <app-linkedIn></app-linkedIn>
export class PlatformComponent {
  mediaType: typeof MediaType = MediaType;

  onMediaChanged(type: MediaType) {
    console.log(type);
    // this.data.type = type;
  }
}
