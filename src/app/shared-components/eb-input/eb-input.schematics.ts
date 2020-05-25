export enum EEbInputType {
  text = 'text',
  email = 'email',
  password = 'password',
  number = 'number',
}

export type EEbInputTypeType = EEbInputType.text 
| EEbInputType.password
| EEbInputType.number
| EEbInputType.email;


export enum EEbInputPasswordStrength {
  none = 'none',
  default = 'default',
  weak = 'weak',
  soso = 'soso',
  strong = 'strong',
}

export type EEbInputPasswordStrengthType =
  | EEbInputPasswordStrength.none
  | EEbInputPasswordStrength.default
  | EEbInputPasswordStrength.weak
  | EEbInputPasswordStrength.soso
  | EEbInputPasswordStrength.strong;
