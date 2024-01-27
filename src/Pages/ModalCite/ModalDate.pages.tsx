import React, { useRef, useState } from 'react'
import { Modal, ModalContent, ModalBody, ModalFooter, Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Request } from '../../services/api'
import { Toaster, toast } from 'sonner'

import emailModel from '../../Models/email.model'
import { ZodError } from 'zod'

interface IModalCitePages {
  isOpen: boolean
  handleClose: () => void
}

const ModalCitePages: React.FC<IModalCitePages> = ({ isOpen, handleClose }) => {
  const formRef = useRef<HTMLFormElement | undefined>()
  const [loading, setLoading] = useState(false)

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const resetFieldError = (fieldName: string) => {
    setFieldErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors }
      delete updatedErrors[fieldName]
      return updatedErrors
    })
  }

  const handleInputChange = (fieldName: string) => {
    // Se llama cuando se modifica un campo de entrada para eliminar el error asociado
    resetFieldError(fieldName)
  }

  const handleSubmitData = async () => {
    const formDataValues = new FormData(formRef.current)

    /*
     *Contiene los valores que se ingresen en  los inputs
     */
    const formValues = Object.fromEntries(formDataValues)

    /*
      TODO: poner el "to" en una variable de entorno 
     */

    const sendData = {
      to: 'stevenbenjumea9@gmail.com',
      subject: `Nueva solicitud de instalación para ${formValues.name}`,
      information: formValues
    }

    try {
      emailModel.parse(formValues)

      setLoading(true)

      /*
       * Petición a la base de datos
       */
      const fetch = new Request()
      await fetch.sendMail(sendData)

      setLoading(false)

      /* Mensaje exitoso */
      toast.success('¡¡Genial!!', {
        description: 'Ha solicitado su servicio correctamente'
      })
    } catch (error) {
      setLoading(false)

      if (error instanceof ZodError) {
        const errors: Record<string, string> = {}
        error.errors.forEach((err) => {
          errors[err.path.join('.')] = err.message
        })
        setFieldErrors(errors)
      } else {
        /* Mensaje de error genérico si no se encuentran errores específicos de Zod */
        toast.error('¡¡Opss!!', {
          description: 'Ha ocurrido un error al solicitar el servicio.'
        })
      }
    }
  }

  return (
    <>
      <Toaster
        richColors
        closeButton
        position='top-right'
      />
      <Modal
        isOpen={isOpen}
        onOpenChange={() => {
          handleClose() // Cerrar la modal
          setFieldErrors({}) // Restablecer los errores al cerrar la modal
        }}
        isDismissable={false}>
        <ModalContent>
          <>
            <ModalBody>
              <form
                action='post'
                onSubmit={handleSubmitData}
                ref={formRef as React.MutableRefObject<HTMLFormElement>}>
                <h1 className='mt-5 text-lg font-bold'>Datos personales</h1>
                <div className='grid grid-cols-2 gap-2 mt-2'>
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Nombre/s'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='name'
                    isInvalid={!!fieldErrors['name']}
                    errorMessage={fieldErrors['name']}
                    onChange={() => handleInputChange('name')}
                  />
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Apellidos'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='lastName'
                    isInvalid={!!fieldErrors['lastName']}
                    errorMessage={fieldErrors['lastName']}
                    onChange={() => handleInputChange('lastName')}
                  />
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Nº de documento'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='numDocument'
                    isInvalid={!!fieldErrors['numDocument']}
                    errorMessage={fieldErrors['numDocument']}
                    onChange={() => handleInputChange('numDocument')}
                  />
                  <Select
                    isRequired
                    labelPlacement={'outside'}
                    label='Tipo de documento'
                    variant='bordered'
                    className='max-w-xs'
                    name='document'
                    isInvalid={!!fieldErrors['document']}
                    errorMessage={fieldErrors['document'] && 'Debe seleccionar un tipo de documento.'}
                    onChange={() => handleInputChange('document')}>
                    <SelectItem key={'CC'}>CC</SelectItem>
                    <SelectItem key={'CE'}>CE</SelectItem>
                    <SelectItem key={'PEP'}>PEP</SelectItem>
                    <SelectItem key={'NIT'}>NIT</SelectItem>
                  </Select>
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Nº de celular'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='numPhone'
                    isInvalid={!!fieldErrors['numPhone']}
                    errorMessage={fieldErrors['numPhone']}
                    onChange={() => handleInputChange('numPhone')}
                  />
                  <Input
                    autoComplete='off'
                    label='Nº fijo'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='numFijo'
                    isInvalid={!!fieldErrors['numFijo']}
                    errorMessage={fieldErrors['numFijo']}
                    onChange={() => handleInputChange('numFijo')}
                  />
                </div>
                <h1 className='mt-5 text-lg font-bold '>¿Qué servicios quiere instalar?</h1>
                <Select
                  isRequired
                  labelPlacement={'outside'}
                  label='Servicios'
                  variant='bordered'
                  className='max-w-xs'
                  name='services'
                  isInvalid={!!fieldErrors['services']}
                  errorMessage={fieldErrors['services'] && 'Debe seleccionar que servicio desea.'}
                  onChange={() => handleInputChange('services')}>
                  <SelectItem key={'Acueducto y Alcantarillado'}>Acueducto y Alcantarillado</SelectItem>
                  <SelectItem key={'Acueducto'}>Acueducto</SelectItem>
                  <SelectItem key={'Alcantarillado'}>Alcantarillado</SelectItem>
                </Select>
                <h1 className='mt-5 text-lg font-bold'>¿Dónde instalará los servicios?</h1>
                <div className='grid grid-cols-2 gap-3 mt-2'>
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Dirección'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='address'
                    isInvalid={!!fieldErrors['address']}
                    errorMessage={fieldErrors['address']}
                    onChange={() => handleInputChange('address')}
                  />
                  <Input
                    autoComplete='off'
                    isRequired
                    label='Barrio'
                    labelPlacement='outside'
                    type='text'
                    variant='bordered'
                    name='neighborhood'
                    isInvalid={!!fieldErrors['neighborhood']}
                    errorMessage={fieldErrors['neighborhood']}
                    onChange={() => handleInputChange('neighborhood')}
                  />
                </div>
              </form>
            </ModalBody>

            <ModalFooter className='flex justify-center'>
              <Button
                color='primary'
                className='w-[50%]'
                onClick={handleSubmitData}
                isLoading={loading}>
                {loading ? 'Agendando cita' : 'Agendar cita'}
              </Button>
            </ModalFooter>
          </>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalCitePages
