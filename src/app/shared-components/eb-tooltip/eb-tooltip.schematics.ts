export enum EEbTooltipPosition {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export type TEbTooltipPositionType =
  EEbTooltipPosition.left
  | EEbTooltipPosition.right
  | EEbTooltipPosition.top
  | EEbTooltipPosition.bottom;

export enum EEbTooltipBackgroundColor {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  error = 'error',
  warning = 'warning',
  white = 'white'
}

export type TEbTooltipBackgroundColorType =
  EEbTooltipBackgroundColor.primary
  | EEbTooltipBackgroundColor.secondary
  | EEbTooltipBackgroundColor.success
  | EEbTooltipBackgroundColor.error
  | EEbTooltipBackgroundColor.warning
  | EEbTooltipBackgroundColor.white
  | string

export interface IEbTooltipOptions {
  text: string,
  backgroundColor: TEbTooltipBackgroundColorType,
  textColor: string,
  maxWidth: number,
  position: TEbTooltipPositionType
}

export const EbTooltipDefaultOptions: IEbTooltipOptions = {
  text: "",
  backgroundColor: EEbTooltipBackgroundColor.secondary,
  textColor: "white",
  maxWidth: 260,
  position: EEbTooltipPosition.top
}

export interface IAdEbTooltipComponent {
  data: IAdEbTooltipComponentData,
  show: boolean
}

export interface IAdEbTooltipComponentData {
  value: string,
  options: IEbTooltipOptions,
  parentElement: any,
  parentElementPosition: any
}
