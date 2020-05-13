export enum EEuInputType {
  text = 'text',
  password = 'password',
}

export type EEuInputTypeType = EEuInputType.text | EEuInputType.password;


export enum EEuInputPasswordStrength {
  default = 'default',
  weak = 'weak',
  soso = 'soso',
  strong = 'strong',
}

export type EEuInputPasswordStrengthType = 
  | EEuInputPasswordStrength.default 
  | EEuInputPasswordStrength.weak 
  | EEuInputPasswordStrength.soso 
  | EEuInputPasswordStrength.strong;
