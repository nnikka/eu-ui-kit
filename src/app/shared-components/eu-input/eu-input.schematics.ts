export enum EEuInputType {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
}

export type EEuInputTypeType = EEuInputType.text | EEuInputType.password;


export enum EEuInputPasswordStrength {
  none = 'none',
  default = 'default',
  weak = 'weak',
  soso = 'soso',
  strong = 'strong',
}

export type EEuInputPasswordStrengthType =
  | EEuInputPasswordStrength.none
  | EEuInputPasswordStrength.default
  | EEuInputPasswordStrength.weak
  | EEuInputPasswordStrength.soso
  | EEuInputPasswordStrength.strong;
