import { z } from 'zod'

const emailModel = z.object({
  name: z.string().min(2, { message: 'Debe contener mínimo 2 caracteres.' }),
  lastName: z.string().min(2, { message: 'Ddebe contener mínimo 2 caracteres.' }),
  numDocument: z.string().min(8, { message: 'Debe contener mínimo 8 caracteres.' }).max(12, { message: 'Dbe contener máximo 12 caracteres.' }),
  document: z
    .string()
    .min(1, { message: 'Debe seleccionar un tipo de documento.' })
    .or(z.string().min(1, { message: 'El campo es requerido.' })),
  numPhone: z.string().min(10, { message: 'Debe contener mínimo 10 caracteres.' }).max(10, { message: 'Debe contener máximo 10 caracteres.' }),
  numFijo: z.string().optional(),
  services: z
    .string()
    .min(1, { message: 'Debe seleccionar el servicio que desea solicitar.' })
    .or(z.string().min(1, { message: 'El campo es requerido.' })),
  address: z.string().min(2, { message: 'Debe contener mínimo 2 caracteres.' }).max(30, { message: 'El campo "Dirección" debe contener máximo 30 caracteres.' }),
  neighborhood: z.string().min(2, { message: 'Debe contener mínimo 2 caracteres.' }).max(20, { message: 'Debe contener máximo 20 caracteres.' })
})

export default emailModel
