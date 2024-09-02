import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonListItemComponent } from './ui-button-list-item.component';

const meta: Meta<UiButtonListItemComponent> = {
  component: UiButtonListItemComponent,
  title: 'UiButtonListItemComponent',
};
export default meta;
type Story = StoryObj<UiButtonListItemComponent>;

export const Primary: Story = {
  args: {},
};
