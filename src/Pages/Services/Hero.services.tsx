import { Card } from '../../components/Card'
import { IconOne, IconThree, IconTwo } from '../../components/Icons'
import { Divider } from '@nextui-org/divider'

export const HeroServices = () => {
  return (
    <section className='h-[87lvh] bg-[#1090CB1A] p-16 grid gap-20'>
      <article className='flex flex-col items-center gap-4'>
        <IconThree
          height={70}
          width={70}
          padding='p-8'
          isRounded
          roundedType='rounded-full'
          withBackground
          backgroundColor='bg-white'
        />
        <div className='grid gap-4 text-center place-items-center'>
          <h2 className='text-3xl font-semibold'>
            Nuestros <span className='text-primary-blue'>servicios</span>
          </h2>
          <p className='font-medium max-w-80 text-pretty text-medium'>Nos complace ofrecer los servicios de alcantarillado y acueducto de mayor calidad a la comunidad Sinceana</p>
        </div>
      </article>
      <Card
        backgroundColor='white'
        className='md:h-80 h-max grid grid-rows-2 md:grid-rows-1 md:grid-cols-[1fr_auto_1fr] py-10'
        isRounded
        customPadding>
        <div className='flex flex-col items-center justify-center gap-10 md:flex-row'>
          <IconOne
            height={50}
            width={50}
            padding='p-6'
            isRounded
            roundedType='rounded-3xl'
            withBackground
            backgroundColor='bg-[#ECFFDA]'
          />
          <p className='font-medium text-medium'>Acueducto</p>
        </div>
        <Divider
          orientation='vertical'
          className='hidden md:block'
        />
        <div className='flex flex-col items-center justify-center gap-10 md:flex-row'>
          <IconTwo
            height={50}
            width={50}
            padding='p-6'
            isRounded
            roundedType='rounded-3xl'
            withBackground
            backgroundColor='bg-[#DAE6FF]'
          />
          <p className='font-medium text-medium'>Alcantarillado</p>
        </div>
      </Card>
    </section>
  )
}
