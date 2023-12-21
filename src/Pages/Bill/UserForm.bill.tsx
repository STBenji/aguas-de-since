import { Button, Input, Select, SelectItem } from '@nextui-org/react'
import { Card } from '../../components/Card'
import { useState } from 'react'

type TDocumentTypes = 'CC' | 'CE' | 'NIT'

export const UserForm = () => {
  const documentTypes: TDocumentTypes[] = ['CC', 'CE', 'NIT']
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      <Card
        backgroundColor='white'
        isRounded
        className='grid w-4/5 grid-rows-[auto_1fr] gap-16 mx-auto'>
        <h2 className='text-3xl font-semibold text-center'>Digite sus credenciales para comenzar</h2>
        <form
          onSubmit={handleSubmit}
          className='grid items-center grid-rows-2 gap-5'>
          <div className='flex flex-col items-center justify-center h-full gap-10 md:flex-row'>
            <Select
              label='Selecciona tu tipo de documento'
              variant='bordered'
              required
              className='max-w-xs'>
              {documentTypes.map((value, index) => (
                <SelectItem
                  key={index}
                  value={value}>
                  {value}
                </SelectItem>
              ))}
            </Select>
            <Input
              isRequired
              type='number'
              label='Número de documento'
              variant='bordered'
              placeholder='1000000000'
              className='max-w-xs'
            />
          </div>
          {isSubmitted === true ? (
            <Button
              className='w-fit justify-self-center'
              type='submit'
              variant='solid'
              isLoading
              color='primary'>
              Enviando
            </Button>
          ) : (
            <Button
              className='w-fit justify-self-center'
              type='submit'
              variant='solid'
              color='primary'>
              Enviar datos
            </Button>
          )}
        </form>
      </Card>
    </>
  )
}
