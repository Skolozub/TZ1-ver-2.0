import { validationSchema } from './validation.schema'

export const options = {
  enableReinitialize: true,
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema,
  handleSubmit: (values, formikBag) => {
    formikBag.props.userLogin(values)
  },
}
