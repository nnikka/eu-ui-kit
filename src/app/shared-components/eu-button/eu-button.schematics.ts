export enum EEuButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type EEuButtonSizeType =
  | EEuButtonSize.small
  | EEuButtonSize.medium
  | EEuButtonSize.large;

export enum EEuButtonWidth {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
  full = 'full'
}

export type EEuButtonWidthType =
  | EEuButtonWidth.small
  | EEuButtonWidth.medium
  | EEuButtonWidth.large
  | EEuButtonWidth.xlarge
  | EEuButtonWidth.full
  | number;

export enum EEuButtonContentPosition {
  left = 'left',
  right = 'right',
  center = 'center',
}

export type EEuButtonContentPositionType =
  | EEuButtonContentPosition.left
  | EEuButtonContentPosition.right
  | EEuButtonContentPosition.center;

export enum EEuButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white'
}

export type EEuButtonColorType =
  | EEuButtonColor.primary
  | EEuButtonColor.secondary
  | EEuButtonColor.success
  | EEuButtonColor.error
  | EEuButtonColor.warning
  | string;

export enum EEuButtonType {
  default = 'default',
  outline = 'outline',
  text = 'text',
}

export type EEuButtonTypeType =
  | EEuButtonType.default
  | EEuButtonType.outline
  | EEuButtonType.text;
