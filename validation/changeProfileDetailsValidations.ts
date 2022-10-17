export interface ProfileDetailsUpdate {
    email: string;
    avatar: string;
    bio: string;
}

export const initialValues = {
    email: '',
    avatar: '',
    bio: ''
}

export const validateRegisterFunction = (values: ProfileDetailsUpdate) => {
    const {bio, email, avatar} = values;
    const errors: ProfileDetailsUpdate = {
        bio: '',
        avatar: '',
        email: ''
    };
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (!bio || bio !== '') {
        errors.bio = 'Invalid password (Minimum six characters, at least one uppercase letter, one lowercase letter and one number)';
    }
    if (!avatar) {
        errors.avatar = 'Avatar is required'
    }

    return errors;
};
