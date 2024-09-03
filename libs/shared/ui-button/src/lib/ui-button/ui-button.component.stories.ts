import type { Meta, StoryObj } from '@storybook/angular';
import { UiButtonComponent } from './ui-button.component';

const meta: Meta<UiButtonComponent> = {
  component: UiButtonComponent,
  title: 'Shared-ui/UiButtonComponent',
  argTypes: {
    config: {},
  },
};
export default meta;
type Story = StoryObj<UiButtonComponent>;

export const Basic: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: false,
      type: 'button',
      isDropdown: false,
      classes: ['btn', 'btn-dark'],
    },
  },
};

export const Icon_Right: Story = {
  args: {
    config: {
      label: 'Icon Right',
      isDisabled: false,
      icon_right: 'fa fa-user',
      type: 'button',
      isDropdown: false,
      classes: ['btn', 'btn-dark'],
    },
  },
};

export const Icon_Left: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: false,
      icon_left: 'fa fa-user',
      type: 'button',
      isDropdown: false,
      classes: ['btn', 'btn-dark'],
    },
  },
};

export const Dropdown: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: false,
      type: 'button',
      isDropdown: true,
      classes: ['btn', 'btn-dark'],
    },
  },
};

export const splitDropdown: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: false,
      type: 'button',
      isDropdown: true,
      isSplit: true,
      classes: ['btn', 'btn-dark'],
    },
  },
};

export const Disabled: Story = {
  args: {
    config: {
      label: 'Profile',
      isDisabled: true,
      type: 'button',
      isDropdown: false,
      classes: ['btn', 'btn-dark'],
    },
  },
};
