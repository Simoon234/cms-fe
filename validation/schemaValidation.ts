import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
    firstname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    lastname: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6).max(30).required('Required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
})