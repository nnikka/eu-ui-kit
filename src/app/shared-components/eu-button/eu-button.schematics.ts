export enum EEuButtonSize {
  mini = 'mini',
  small = 'small',
  medium = 'medium',
  large = 'large',
  xlarge = 'xlarge',
}

export type EEuButtonSizeType =
  | EEuButtonSize.mini
  | EEuButtonSize.small
  | EEuButtonSize.medium
  | EEuButtonSize.large
  | EEuButtonSize.xlarge;

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
}

export type EEuButtonColorType =
  | EEuButtonColor.primary
  | EEuButtonColor.secondary
  | EEuButtonColor.success
  | EEuButtonColor.error
  | EEuButtonColor.warning
  | string;

export enum EEuButtonType {
  normal = 'normal',
  outline = 'outline',
  text = 'text',
}

export type EEuButtonTypeType =
  | EEuButtonType.normal
  | EEuButtonType.outline
  | EEuButtonType.text;
