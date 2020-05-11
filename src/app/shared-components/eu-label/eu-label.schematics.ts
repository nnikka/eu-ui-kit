export enum EEuLabelType {
  default = 'default',
  round = 'round',
}

export type EEuLabelTypeType = EEuLabelType.default | EEuLabelType.round;

export enum EEuLabelSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type EEuLabelSizeType =
  | EEuLabelSize.small
  | EEuLabelSize.medium
  | EEuLabelSize.large;

export enum EEuLabelColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white',
}

export type EEuLabelColorType =
  | EEuLabelColor.primary
  | EEuLabelColor.secondary
  | EEuLabelColor.success
  | EEuLabelColor.error
  | EEuLabelColor.warning
  | string;

export enum EEuLabelTextColor {
  black = 'black',
  white = 'white',
  grey = 'grey'
}

export type EEuLabelTextColorType =
  | EEuLabelTextColor.black
  | EEuLabelTextColor.white
  | EEuLabelTextColor.grey
  | string;
