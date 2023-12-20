import { HTMLAttributes, ReactNode } from 'react'

interface ICardProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode | ReactNode[]
  backgroundColor?: string
  textColor?: string
  isRounded?: boolean
}

export const Card = ({ children, backgroundColor, textColor, isRounded, className }: ICardProps) => {
  return (
    <div
      className={`w-full h-full p-10 ${isRounded && 'rounded-xl'} ${className}`}
      style={{ backgroundColor, color: textColor }}>
      {children}
    </div>
  )
}
