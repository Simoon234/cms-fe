export interface InitialFormValues {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
}

export const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
}

export const validateFunction = () => {
    const {confirmPassword, password, email, firstname, lastname} = initialValues;
    const errors: InitialFormValues = {
        confirmPassword: '',
        email: '',
        firstname: '',
        lastname: '',
        password: ''
    };
    if (!firstname) {
        errors.firstname = 'Required';
    } else if (firstname.length > 15) {
        errors.firstname = 'Must be 15 characters or less';
    }

    if (!lastname) {
        errors.lastname = 'Required';
    } else if (lastname.length > 20) {
        errors.lastname = 'Must be 20 characters or less';
    }

    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (!password) {
        errors.password = 'Required';
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/.test(password)) {
        errors.password = 'Invalid password (Minimum six characters, at least one uppercase letter, one lowercase letter and one number)';
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password does not match';
    }

    return errors;
};