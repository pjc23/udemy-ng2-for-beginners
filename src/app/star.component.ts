import { Component, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'star',
  template: `
    <i class="glyphicon"
      [class.glyphicon-star-empty]="!isEnabled"
      [class.glyphicon-star]="isEnabled"
      (click)="onClick()">
    </i>
  `,
})
export class StarComponent {
  @Input() isEnabled = false;

  change = new EventEmitter();

  onClick() {
    this.isEnabled = !this.isEnabled;
  }
}
