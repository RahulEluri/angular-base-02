import { Component, Input } from '@angular/core';
import { ButtonConfig } from '../button.config';

@Component({
  selector: 'venus-ui-button',
  templateUrl: './ui-button.component.html',
  styleUrl: './ui-button.component.css',
})
export class UiButtonComponent {
  @Input() config?: ButtonConfig | undefined;
  label: string | undefined;
  icon_right: string | undefined;
  icon_left: string | undefined;
  type: string = '';
  toggle?: string;

  constructor() {}

  ngOnInit(): void {
    this.label = this.config?.label;
    this.icon_right = this.config?.icon_right;
    this.icon_left = this.config?.icon_left;
    this.type = this.config!.type;

    if (this.config?.isDropdown && !this.config?.isSplit) {
      this.toggle = 'dropdown';
      this.config.classes = [...(this.config.classes || []), 'dropdown-toggle'];
    }
  }

  click() {
    if (this.config?.click) {
      this.config?.click();
    }
  }
}
