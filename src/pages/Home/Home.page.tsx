import { CompanyDetails } from "./CompanyDetails.home";
import { HomeHero } from "./Hero.home";
import { ServicesIcons } from "./ServicesIcons.home";
import { ShapesDecorators } from "./ShapesDecorators.home";

export default function HomePage() {
  return (
    <main>
      <section className='h-[87lvh] bg-[#1090CB]/10 sm:px-32 grid sm:grid-cols-2 items-center gap-10 relative'>
        <HomeHero />
        <ShapesDecorators />
      </section>
      <section className='h-[30lvh] flex flex-col md:flex-row justify-center items-center gap-10 border-b border-b-gray-300'>
        <ServicesIcons />
      </section>
      <section className='flex flex-col gap-16 p-16'>
        <CompanyDetails />
      </section>
    </main>
  )
}
