import { Image } from '@nextui-org/react'

interface ImageProps {
  src?: string
  width?: number | string
  height?: number | string
  className?: string
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

export const IconOne = ({ width, height, className }: ImageProps) => (
  <Image
    src='/acueducto.png'
    width={width}
    height={height}
    className={className}
  />
)

export const IconTwo = ({ width, height, className }: ImageProps) => (
  <Image
    src='/alcantarilla.png'
    width={width}
    height={height}
    className={className}
  />
)
