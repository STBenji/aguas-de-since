import { Button } from '@nextui-org/react'
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
    <section className='flex flex-col items-center gap-16 h-96'>
      <ListedTitle
        content='¿Dónde encontrarnos?'
        className='text-xl md:text-3xl'
      />
      <article className='size-full'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.600984190538!2d-75.14872242150233!3d9.24246641854446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5937fa764fd7d9%3A0x9cd04cded833e550!2sCl.%206%20%2310%2C%20San%20Luis%20de%20Sinc%C3%A9%2C%20Sinc%C3%A9%2C%20San%20Luis%20de%20Sinc%C3%A9%2C%20Sucre!5e0!3m2!1ses-419!2sco!4v1708531417902!5m2!1ses-419!2sco'
          className='w-full h-full'
          loading='lazy'
          allowFullScreen={true}
          referrerPolicy='no-referrer-when-downgrade'></iframe>
      </article>

      <Button
        onClick={handleNavigate}
        variant='bordered'
        color='primary'
        className='p-5'>
        Cómo llegar
      </Button>
    </section>
  )
}
