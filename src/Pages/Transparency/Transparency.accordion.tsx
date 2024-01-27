import { Accordion, AccordionItem } from '@nextui-org/react'

export default function AccordionTransparency() {
  return (
    <section className='grid p-4 place-content-center'>
      <Accordion
        className='w-full'
        variant='bordered'
        isCompact>
        <AccordionItem
          key='1'
          aria-label='Información de la entidad'
          title='Información de la entidad'>
          <strong>Información de la entidad</strong>
        </AccordionItem>
        <AccordionItem
          key='2'
          aria-label='Normativa'
          title='Normativa'>
          <strong>Normativa</strong>
        </AccordionItem>
        <AccordionItem
          key='3'
          aria-label='Contratación'
          title='Contratación'>
          <strong>Contratación</strong>
        </AccordionItem>
        <AccordionItem
          key='4'
          aria-label='Planeación, presupuestos e informes'
          title='Planeación, presupuestos e informes'>
          <strong>Planeación, presupuestos e informes</strong>
        </AccordionItem>
        <AccordionItem
          key='5'
          aria-label='Trámites'
          title='Trámites'>
          <strong>Trámites</strong>
        </AccordionItem>
        <AccordionItem
          key='6'
          aria-label='Participa'
          title='Participa'>
          <strong>Participa</strong>
        </AccordionItem>
        <AccordionItem
          key='7'
          aria-label='Datos abiertos'
          title='Datos abiertos'>
          <strong>Datos abiertos</strong>
        </AccordionItem>
        <AccordionItem
          key='8'
          aria-label='Información especifica para grupos de intereses'
          title='Información especifica para grupos de intereses'>
          <strong>Información especifica para grupo de intereses</strong>
        </AccordionItem>
        <AccordionItem
          key='9'
          aria-label='Obligación de reporte de información'
          title='Obligación de reporte de información'>
          <strong>Obligación de reporte de información</strong>
        </AccordionItem>
      </Accordion>
    </section>
  )
}
