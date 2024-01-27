import { useState } from 'react'
import { Card, CardBody, CardHeader } from '@nextui-org/react'

import { motion } from 'framer-motion'

interface Purpose {
  id: string
  title: string
  description: string
}

const PurposeAboutUs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('mision') // Estado para controlar la pestaña activa

  const purpose: Purpose[] = [
    {
      id: 'mision',
      title: 'Misión',
      description: 'AGUAS DE SINCÉ SAS ESP presta los servicios de acueducto y alcantarillado del municipio de Sincé, Sucre, garantizando cobertura, calidad y continuidad a los usuarios de dichos servicios, en condiciones económicas razonables.'
    },
    {
      id: 'vision',
      title: 'Visión',
      description: 'Para el año 2030, AGUAS DE SINCÉ SAS ESP continuará prestando los servicios de acueducto y alcantarillado y será una de las empresas oficiales de la región con un excelente fortalecimiento institucional, logrando la preservación del medio ambiente y fomentando la participación ciudadana en la gestión empresarial.'
    }
  ]

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <section className='grid px-3 py-2 place-content-center'>
      <ul className='relative flex flex-wrap justify-center text-sm font-medium text-center text-gray dark:text-gray-400'>
        <motion.div className={`w-[8rem] h-[2.8rem] rounded-full bg-[#1090CB] absolute top-0 transition-transform duration-300 ${activeTab === 'vision' ? 'right-[11.5rem]' : 'left-[11rem]'} `}></motion.div>
        {purpose.map((item) => (
          <li
            key={item.id}
            className='z-50 cursor-pointer me-2'>
            <h1
              className={`inline-block px-12 py-3 rounded-full ${activeTab === item.id ? 'text-white' : ' text-[#1090CB] bg-[#E7EFF3]'}`}
              onClick={() => handleTabClick(item.id)}>
              {item.title}
            </h1>
          </li>
        ))}
      </ul>

      {/* Mostrar el contenido de la pestaña activa */}
      <div className='mt-8'>
        {purpose.map(
          (item) =>
            activeTab === item.id && (
              <Card
                key={item.id}
                className='max-w-[40rem] py-3 px-5  h-[30vh]'>
                <CardBody>
                  <CardHeader className='flex justify-center'>
                    <h1 className='text-xl font-semibold'>{item.title}</h1>
                  </CardHeader>
                  <p className='text-gray-600'>{item.description}</p>
                </CardBody>
              </Card>
            )
        )}
      </div>
    </section>
  )
}

export default PurposeAboutUs
// ${activeTab === item.id ? 'text-white bg-blue-600' : ''}
