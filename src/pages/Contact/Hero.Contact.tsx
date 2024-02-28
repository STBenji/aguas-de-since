import { Button, Image } from '@nextui-org/react'
import { ListedTitle } from '../../components/ListedTitle'
import { useState, useEffect } from 'react'

const defaultDirection = 'Cl. 6 #10, San Luis de Sincé, Sincé, San Luis de Sincé, Sucre'

export function HeroContact() {
  const [userAddress, setUserAddress] = useState<string | null>(null)

  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords
            setUserAddress(`${latitude},${longitude}`)
          },
          (error) => {
            console.error('Error getting user location:', error)
          }
        )
      } else {
        console.error('Geolocation is not supported by this browser.')
      }
    }

    getLocation()
  }, [])

  const handleNavigate = () => {
    if (userAddress) {
      const mapsUrl = `https://www.google.com/maps/dir/${userAddress}/${encodeURIComponent(defaultDirection)}`
      window.open(mapsUrl, '_blank')
    }
  }

  return (
    <section className='justify-center gap-4 px-5 py-5 md:flex'>
      <ListedTitle
        content='¿Dónde encontrarnos?'
        className='text-xl md:text-3xl'
      />
      <article className='relative flex flex-col items-center '>
        <div className='hidden md:grid rounded-full w-[2.4rem] h-[2.4rem] bg-[#ff00002a]  place-content-center absolute bottom-40 left-40 z-10'>
          <div className='md:rounded-full w-[.5rem] h-[.5rem] bg-red-600' />
        </div>
        <Image
          src='/map.png'
          alt='Ubicación en Google Maps'
          className='z-0'
        />
        <Button
          onClick={handleNavigate}
          variant='bordered'
          color='primary'
          className='right-0'>
          Cómo llegar
        </Button>
      </article>
    </section>
  )
}
