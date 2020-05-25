export enum EEbLabelType {
  default = 'default',
  round = 'round',
}

export type EEbLabelTypeType = EEbLabelType.default | EEbLabelType.round;

export enum EEbLabelSize {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

export type EEbLabelSizeType =
  | EEbLabelSize.small
  | EEbLabelSize.medium
  | EEbLabelSize.large;

export enum EEbLabelColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white',
}

export type EEbLabelColorType =
  | EEbLabelColor.primary
  | EEbLabelColor.secondary
  | EEbLabelColor.success
  | EEbLabelColor.error
  | EEbLabelColor.warning
  | string;

export enum EEbLabelTextColor {
  black = 'black',
  white = 'white',
  grey = 'grey'
}

export type EEbLabelTextColorType =
  | EEbLabelTextColor.black
  | EEbLabelTextColor.white
  | EEbLabelTextColor.grey
  | string;
