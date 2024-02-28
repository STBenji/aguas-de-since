import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from '@nextui-org/react'
import { useEffect, useState } from 'react'

export default function ModalComponent() {
  const { isOpen, onClose } = useDisclosure()
  const [hasOpened, setHasOpened] = useState(false)

  useEffect(() => {
    const hasOpenedBefore = localStorage.getItem('hasOpenedModal')
    if (!hasOpenedBefore) {
      setHasOpened(true)
      localStorage.setItem('hasOpenedModal', 'true')
    }
  }, [])

  return (
    <>
      {hasOpened && (
        <Modal
          isOpen={isOpen}
          onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className='flex flex-col gap-1'>Atención</ModalHeader>
                <ModalBody>
                  <p>Actualmente nos encontramos en mantenimiento, gracias por la comprensión...</p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color='danger'
                    variant='light'
                    onPress={onClose}>
                    Cerrar
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
