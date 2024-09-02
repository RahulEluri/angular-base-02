import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button/ui-button.component';
import { UiButtonListComponent } from './ui-button-list/ui-button-list.component';
import { UiButtonListItemComponent } from './ui-button-list-item/ui-button-list-item.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    UiButtonComponent,
    UiButtonListComponent,
    UiButtonListItemComponent,
  ],
  exports: [
    UiButtonComponent,
    UiButtonListComponent,
    UiButtonListItemComponent,
  ],
})
export class SharedUiButtonModule {}
