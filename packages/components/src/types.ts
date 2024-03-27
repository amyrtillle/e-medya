// export type Icon = `i-em:${string}`

export type TextContentType = 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'a' | 'label'

export type Variant = 'primary' | 'secondary' | 'tertiary'

export type Size = '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export type Icon = 'arrowUp' | 'arrowDown' | 'play' | 'calendar' | 'cast' | 'write' | 'verified' | 'money' | 'checkmark' | 'question' | 'folder' | 'translate' | 'voice' | 'message' | 'phone' | 'time' | 'security' | 'search' | 'send' | 'account' | 'pin' | 'rain' | 'sun' | 'validated' | 'home' | 'instagram' | 'linkedin' | 'youtube'

export type Input = 'submit' | 'checkbox' | 'select' | 'text' | 'textarea' | 'email' | 'phone' | 'file' | 'date' | 'time' | 'select-checkbox'

export interface TextContentProps {
  typo?: Variant
  variant?: Variant
  size?: Size
  tag?: TextContentType
  text: Array<string> | string
  href?: string
  for?: string
}
export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset'
  variant?: Variant
  label: string
  link?: string
}

export interface IconProps {
  src?: Icon
}

export interface ImageProps {
  src: string
  alt?: string
  imageVariant?: Variant
  link?: string
}
export interface InputProps {
  type: Input
  label: string
  placeholder?: string
  required?: boolean
  icon?: Icon
  name: string
  ariaLabel?: string
  accept?: string
  options?: [
    {
      value: string
      text: string
    },
  ]
}

// export interface MenuProps {
//   isOpen: {
//     boolean: boolean
//     writable: true
//   }
// }
