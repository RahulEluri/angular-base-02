import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'Shared-ui/UiButtonComponent',
  argTypes: {
    config: {
      label: {
        control: 'text',
      },
      isDisabled: {
        control: false,
      },
      isDropDown: {
        control: true,
      },
    },
  },
};
export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Primary: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: false,
      type: 'submit',
      isDropdown: true,
      classes: ['btn', 'btn-dark'],
    },
  },
};
