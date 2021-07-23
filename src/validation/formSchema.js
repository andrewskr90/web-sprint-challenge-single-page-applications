import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'Name must be 2 characters long'),
    size: yup
        .string()
        .oneOf(['peperoni','sausage','onions','pineapple'],'Pick a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string().trim()
})

export default formSchema