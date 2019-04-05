import { object, string } from 'yup'

export const validationSchema = object().shape({
  username: string().required('Поле логина не должно быть пустым'),
  password: string().required('Поле пароля не должно быть пустым'),
})
