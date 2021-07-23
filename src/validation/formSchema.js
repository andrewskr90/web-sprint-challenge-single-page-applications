import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .oneOf(['small','medium','large','extraLarge'],'Pick a size'),
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    pineapple: yup.boolean(),
    instructions: yup.string().trim()
})

export default formSchema