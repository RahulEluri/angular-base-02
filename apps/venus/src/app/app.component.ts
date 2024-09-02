import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SharedUiButtonModule } from 'venus-base-ui-button';
import { ButtonConfig } from 'libs/shared/ui-button/src/lib/button.config';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, SharedUiButtonModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  closeButtonConfig: ButtonConfig | undefined;
  title = 'venus';

  constructor() {
    this.closeButtonConfig = new ButtonConfig({
      label: 'Profile',
      isDisabled: false,
      type: 'submit',
      click: this.OnClick,
      isDropdown: true,
      classes: ['btn', 'btn-dark'],
    });
  }

  OnClick() {
    console.log('Button has clicked');
  }

  helloworld() {
    console.log('Hello World');
  }
}
