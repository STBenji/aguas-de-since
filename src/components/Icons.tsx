import { Image } from '@nextui-org/react'
import { HTMLAttributes } from 'react'
import { TRoundedProps } from '../types/globalTypes'

interface ImageProps extends HTMLAttributes<HTMLElement> {
  src?: string
  width: number | string
  height: number | string
  className?: string
}

interface IconProps extends Omit<ImageProps, 'src'> {
  isRounded?: boolean | undefined
  roundedType?: TRoundedProps
  padding?: string
  withBackground?: boolean | undefined
  backgroundColor?: string | undefined
}

export const Logo = ({ width, height, src = '/LogoPrincipal.png' }: ImageProps) => (
  <Image
    src={src}
    width={width}
    height={height}
    fallbackSrc={`https://placehold.co/${width}x${height}`}
    alt='Imagen del logo principal'
  />
)

export const IconOne = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/acueducto.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      width={width}
      height={height}
      className={className}
    />
  )

export const IconTwo = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/alcantarilla.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      width={width}
      height={height}
      className={className}
    />
  )

export const IconThree = ({ width, height, padding = 'p-8', className, backgroundColor, isRounded, withBackground, roundedType }: IconProps) =>
  withBackground ? (
    <div className={`${padding} ${backgroundColor ? backgroundColor : 'bg-white'} ${isRounded && 'rounded-full'} w-fit h-fit ${roundedType} ${className}`}>
      <Image
        src='/servicios.png'
        alt='Icono de servicios'
        width={width}
        height={height}
      />
    </div>
  ) : (
    <Image
      src='/acueducto.png'
      width={width}
      height={height}
      className={className}
    />
  )
