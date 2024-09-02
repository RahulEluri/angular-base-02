import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonListComponent } from './ui-button-list.component';

const meta: Meta<UiButtonListComponent> = {
  component: UiButtonListComponent,
  title: 'UiButtonListComponent',
};
export default meta;
type Story = StoryObj<UiButtonListComponent>;

export const Primary: Story = {
  args: {},
};
