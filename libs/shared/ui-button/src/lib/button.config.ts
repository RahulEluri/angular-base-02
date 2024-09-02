export class ButtonConfig {
  label: string | undefined;
  isDisabled: boolean | undefined;
  isDropdown: boolean | undefined;
  type: string;
  icon_right?: string | undefined;
  icon_left?: string | undefined;
  classes?: string | string[];
  click?: () => any;

  constructor(data: {
    label: string;
    isDisabled: boolean;
    type: string;
    icon_right?: string;
    icon_left?: string;
    isDropdown: boolean;
    classes?: string | string[];
    click: () => any;
  }) {
    this.label = data.label;
    this.isDisabled = data.isDisabled;
    this.isDropdown = data.isDropdown;
    this.type = data.type;
    this.icon_right = data.icon_right;
    this.icon_left = data.icon_left;
    this.classes = data.classes;
    this.click = data.click;
  }
}
