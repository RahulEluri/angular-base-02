import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../button.config';

export interface dropdownlist {
  click?: () => any;
}

@Component({
  selector: 'venus-ui-button-list-item',
  templateUrl: './ui-button-list-item.component.html',
  styleUrl: './ui-button-list-item.component.css',
})
export class UiButtonListItemComponent {
  @Input() config!: dropdownlist;

  onClick() {
    if (this.config.click) {
      this.config.click();
    }
  }
}
