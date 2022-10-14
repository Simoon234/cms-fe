export interface InitialFormValues {
    username: string;
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirmPassword: string,
    avatar: string;
}

export const initialValues: InitialFormValues = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    avatar: ''
}

export const validateRegisterFunction = (values: InitialFormValues) => {
    const {confirmPassword, password, email, firstname, lastname, username} = values;
    const errors: InitialFormValues = {
        username: '',
        confirmPassword: '',
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        avatar: ''
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

    if (!username) {
        errors.username = 'Required';
    } else if (username.length < 5) {
        errors.username = 'Username must be at least 5 characters'
    }

    if (!confirmPassword) {
        errors.confirmPassword = 'Required';
    } else if (password !== confirmPassword) {
        errors.confirmPassword = 'Password does not match';
    }

    return errors;
};