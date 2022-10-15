import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import {DEFAULT_URL} from "../api.config";
import {LogUserResponse, RegisterUser} from "../types";

interface UserSliceInitialState {
    id: null | number;
    username: string;
    email: string;
    avatar: string;
    isLogged: boolean;
    isFetching: boolean,
    isSuccessLogin: boolean,
    isSuccessRegister: boolean,
    isError: boolean,
    registerErrorMessage: string;
    loginErrorMessage: string,
    isAuthMessage: string;
}

const initialState: UserSliceInitialState = {
    id: null,
    username: '',
    avatar: '',
    email: '',
    isLogged: false,
    isFetching: false,
    isSuccessLogin: false,
    isSuccessRegister: false,
    registerErrorMessage: '',
    isError: false,
    loginErrorMessage: '',
    isAuthMessage: ''
}


export const signNewUser = createAsyncThunk(
    'user/signUser',
    async (values: RegisterUser, thunk) => {
        try {
            const registerUser = await fetch(`${DEFAULT_URL}/api/auth/local/register`, {
                method: 'POST',
                body: JSON.stringify({
                    ...values,
                    avatar: 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png?w=360'
                }),
                headers: {
                    'Content-type': 'application/json'
                }
            })

            const data = await registerUser.json();
            if (registerUser.status === 200) {
                localStorage.setItem('token', data.jwt);
                return data;
            }

            if (data.error.name === 'ApplicationError') {
                return thunk.rejectWithValue({
                    ...data,
                    message: data.error.message
                })
            }

            return thunk.rejectWithValue({
                ...data,
                message: 'Application Error...'
            })

        } catch (e: any) {
            console.error(e);
            console.log('Error: ' + e.message)
        }
    }
)

export const logUser = createAsyncThunk(
    'user/logUser',
    async (values: LogUserResponse, thunk) => {
        try {
            const logUser = await fetch(`${DEFAULT_URL}/api/auth/local`, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            const data = await logUser.json();

            if (logUser.status === 200) {
                localStorage.setItem('token', data.jwt);
                return data;
            }

            if (data.error.name === "ValidationError") {
                console.log('elo')
                return thunk.rejectWithValue({
                    ...data,
                    message: data.error.message
                })
            }
        } catch (e: any) {
            return thunk.rejectWithValue({
                ...e.response,
                message: 'Invalid credentials',
            });
        }
    }
)

export const fetchUser = createAsyncThunk(
    'users/fetchUserByJWT',
    async (jwt: string, thunk) => {
        try {
            const user = await fetch(`${DEFAULT_URL}/api/users/me`, {
                headers: {
                    Authorization: `Bearer ${jwt}`,
                },
            });

            const data = await user.json();
            if (user.status === 200) {
                console.log(data)
                return data;
            }
            console.log(data)
            if (data.error.name === 'UnauthorizedError') {
                return thunk.rejectWithValue({
                    message: data.error.message,
                });
            }

            return thunk.rejectWithValue(data);
        } catch (e: any) {
            return thunk.rejectWithValue(e.response.data);
        }
    },
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state) => {
            localStorage.setItem('token', '');
            state.id = 0;
            state.isLogged = false;
            state.email = '';
            state.username = '';
            state.isSuccessLogin = false;

            return state;
        }
    },
    extraReducers: {
        [signNewUser.fulfilled.toString()]: (state, {payload}) => {
            state.isFetching = false;
            state.isLogged = true;
            state.isSuccessRegister = true;
            state.isSuccessLogin = true;
            state.registerErrorMessage = '';
            state.id = payload.user.id;
            state.email = payload.user.email;
            state.username = payload.user.username;
        },
        [signNewUser.pending.toString()]: (state) => {
            state.isFetching = true;
        },
        [signNewUser.rejected.toString()]: (state, {payload}) => {
            state.isFetching = false;
            state.registerErrorMessage = payload.message;
            state.isError = true;
        },
        [logUser.fulfilled.toString()]: (state, {payload}) => {
            state.isFetching = false;
            state.isLogged = true;
            state.isSuccessRegister = true;
            state.isSuccessLogin = true;
            state.email = payload.email;
            state.username = payload.username;
            state.id = payload.id;
            state.avatar = payload.avatar;
            return state;
        },
        [logUser.pending.toString()]: (state) => {
            state.isFetching = true;
        },
        [logUser.rejected.toString()]: (state, {payload}) => {
            state.isFetching = false;
            state.isSuccessLogin = false;
            state.isError = true;
            state.loginErrorMessage = payload.message;
        },
        [fetchUser.fulfilled.toString()]: (state, {payload}) => {
            state.email = payload.email;
            state.username = payload.username;
            state.id = payload.id;
            state.isLogged = true;
            state.isFetching = false;
            state.isAuthMessage = '';
            return state;
        },
        [fetchUser.rejected.toString()]: (state, {payload}) => {
            state.isFetching = false;
            state.isError = true;
            state.isAuthMessage = payload.message;
        },
        [fetchUser.pending.toString()]: (state) => {
            state.isFetching = true;
        },
    }
})
export const {logout} = userSlice.actions;
export default userSlice.reducer;