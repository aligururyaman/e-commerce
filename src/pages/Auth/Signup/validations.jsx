import * as yup from "yup"

const validation = yup.object().shape({
    email: yup
    .string()
    .email("Geçerli bir e-mail giriniz.")
    .required("Zorunlu alan.."),
    pass: yup
    .string()
    .min(5,"Lütfen en az 5 karakter giriniz")
    .required("Zorunlu alan.."),
    passcon: yup
    .string()
    .oneOf([yup.ref("pass")],"Parolalar aynı olmak zorundadır.")
    .required()
})

export default validation;