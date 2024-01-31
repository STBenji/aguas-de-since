// Importaciones necesarias
import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'
import { Button, Card } from '@nextui-org/react'
import pdfFile from '/CCU.pdf'

// Configuración de pdf.js
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

// Componente ViewPdf
export default function CCUPdfLector() {
  // Estado para almacenar el número total de páginas y la página actual
  const [numPages, setNumPages] = useState<number>(0)
  const [pageNumber, setPageNumber] = useState(1)

  // Manejador de éxito de carga del documento PDF
  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages)
  }

  // Función para cambiar de página
  const onPageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber)
  }

  return (
    // Contenedor principal del componente
    <section className='flex items-center justify-center h-screen'>
      <section className=' w-[85vw] md:w-auto'>
        <Card>
          <section className='h-[70vh] overflow-auto p-1'>
            <Document
              file={pdfFile}
              onLoadSuccess={onDocumentLoadSuccess}
              className={'document'}>
              <Page pageNumber={pageNumber} />
            </Document>
          </section>
          <p className='text-center'>
            Página {pageNumber} de {numPages}
          </p>
          <section className='flex justify-center w-full gap-4 p-4'>
            <Button
              color='primary'
              variant='ghost'
              onClick={() => onPageChange(pageNumber - 1)}
              disabled={pageNumber <= 1}>
              Página anterior
            </Button>
            <Button
              color='primary'
              variant='ghost'
              onClick={() => onPageChange(pageNumber + 1)}
              disabled={pageNumber >= numPages}>
              Página siguiente
            </Button>
          </section>
        </Card>
      </section>
    </section>
  )
}
