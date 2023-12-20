import { Image } from '@nextui-org/react'

type TLogo = {
  width?: number | string
  height?: number | string
}

export default function Logo({ width, height }: TLogo) {
  return (
    <Image
      src='/LogoPrincipal.png'
      width={width}
      height={height}
    />
  )
}
