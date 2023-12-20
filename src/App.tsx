import { Image } from '@nextui-org/react'

export default function App() {
  return (
    <>
      <Image
        sizes='auto'
        src='/pqrs.jpg'
        fallbackSrc='https://via.placeholder.com/300x200'
        alt='pqrs'
      />
    </>
  )
}
