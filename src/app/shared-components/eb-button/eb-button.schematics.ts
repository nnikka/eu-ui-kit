export enum EEbButtonSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type EEbButtonSizeType =
  | EEbButtonSize.small
  | EEbButtonSize.medium
  | EEbButtonSize.large;

export enum EEbButtonWidth {
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
  full = 'full'
}

export type EEbButtonWidthType =
  | EEbButtonWidth.small
  | EEbButtonWidth.medium
  | EEbButtonWidth.large
  | EEbButtonWidth.xlarge
  | EEbButtonWidth.full
  | number;

export enum EEbButtonContentPosition {
  left = 'left',
  right = 'right',
  center = 'center',
}

export type EEbButtonContentPositionType =
  | EEbButtonContentPosition.left
  | EEbButtonContentPosition.right
  | EEbButtonContentPosition.center;

export enum EEbButtonColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white'
}

export type EEbButtonColorType =
  | EEbButtonColor.primary
  | EEbButtonColor.secondary
  | EEbButtonColor.success
  | EEbButtonColor.error
  | EEbButtonColor.warning
  | string;

export enum EEbButtonType {
  default = 'default',
  outline = 'outline',
  text = 'text',
}

export type EEbButtonTypeType =
  | EEbButtonType.default
  | EEbButtonType.outline
  | EEbButtonType.text;
