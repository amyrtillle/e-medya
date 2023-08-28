// export type Icon = `i-em:${string}`

export type TextContentType = 'h1' | 'h2' | 'h3' | 'p' | 'span'

export type Variant = 'primary' | 'secondary' | 'tertiary'

export type Size = '3xs' | '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl'

export interface TextContentProps {
  typo?: Variant
  variant: Variant
  size?: Size
  tag?: TextContentType
  text: string
}

export interface ButtonProps {
  variant?: Variant
  label: string
}

// export interface MenuProps {
//   isOpen: {
//     boolean: boolean
//     writable: true
//   }
// }

// export type LinkComponent = Component<{ href?: unknown }> | 'a'

// export type ActionComponent = LinkComponent | 'button'

// export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

// export type HTMLTag = 'div' | 'p' | 'span' | 'article' | 'section'

// export type Details = Array<{ label: string; value: string }>

// export interface ImageData {
//   alt: string
//   sizes?: string[]
//   src: string
//   srcset?: string
// }

// export interface Route {
//   imageData: ImageData
//   heading: string
//   details?: Details
//   tag?: string
//   tagVariant?: Variant
// }
