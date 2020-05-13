export enum EEuTooltipPosition {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export type TEuTooltipPositionType =
  EEuTooltipPosition.left
  | EEuTooltipPosition.right
  | EEuTooltipPosition.top
  | EEuTooltipPosition.bottom;

export enum EEuTooltipBackgroundColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white'
}

export type TEuTooltipBackgroundColorType =
  EEuTooltipBackgroundColor.primary
  | EEuTooltipBackgroundColor.secondary
  | EEuTooltipBackgroundColor.success
  | EEuTooltipBackgroundColor.error
  | EEuTooltipBackgroundColor.warning
  | EEuTooltipBackgroundColor.white
  | string

export interface IEuTooltipOptions {
  text: string,
  backgroundColor: TEuTooltipBackgroundColorType,
  textColor: string,
  maxWidth: number,
  position: TEuTooltipPositionType
}

export const EuTooltipDefaultOptions: IEuTooltipOptions = {
  text: "",
  backgroundColor: EEuTooltipBackgroundColor.secondary,
  textColor: "white",
  maxWidth: 200,
  position: EEuTooltipPosition.top
}

export interface IAdEuTooltipComponent {
  data: IAdEuTooltipComponentData,
  show: boolean
}

export interface IAdEuTooltipComponentData {
  value: string,
  options: IEuTooltipOptions,
  parentElement: any,
  parentElementPosition: any
}
