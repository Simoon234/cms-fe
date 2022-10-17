import Link from "next/link";
import Layout from "../../layout/LayoutComponent";
import {useFormik} from "formik";
import {LogSchema} from "../../validation/schemaValidation";
import styled from "styled-components";
import {UseDispatchHook} from "../../hooks/useDispatchHook";
import {LogUserResponseData} from "../../types";
import {UseAppSelectorHook} from "../../hooks/useAppSelectorHook";
import {useEffect} from "react";
import {toast} from "react-toastify";
import {logUser} from "../../redux/userSlice";
import {UseHomeRouter} from "../../hooks/useHomeRouter";
import {closeModal} from "../../redux/closeModalSlice";

export const LogUser = () => {
    const dispatch = UseDispatchHook();
    const router = UseHomeRouter();
    const {isSuccessLogin, isError, loginErrorMessage, isLogged} = UseAppSelectorHook((state) => state.user);
    const onSubmit = async (values: LogUserResponseData, action: any) => {
        const loginInfo = {
            identifier: values.email,
            password: values.password,
        };
        dispatch(logUser(loginInfo))
        action.resetForm();
        await router.push('/profile')
    }

    useEffect(() => {
        dispatch(closeModal(false))
    }, [dispatch])

    const notifyLogin = () => {
        toast.success('Zostałeś pomyślnie zalogowany!', {
            pauseOnFocusLoss: false,
            pauseOnHover: false,
            toastId: 'login-toast',
        });
    };

    useEffect(() => {
        if (isSuccessLogin) {
            notifyLogin()
        }
    }, [isSuccessLogin])

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({initialValues: {email: '', password: ""}, validationSchema: LogSchema, onSubmit});
    return (
        <Layout title='Create new account' description='Register new account'
                keywords='new account, profile, register, create'>
            <Signup>
                <p className='header'>Sign Up</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="email">Email</label>
                    <input
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.email && touched.email && <p className="error">{errors.email}</p>}
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.password && touched.password ? "input-error" : ""}
                    />
                    {errors.password && touched.password && (
                        <p className="error">{errors.password}</p>
                    )}
                    <button disabled={isSubmitting} type="submit">
                        Sign Up
                    </button>
                    <span className='redirect'>Dont have an account? <Link href='/new-account'>Sign in</Link></span>
                </form>
            </Signup>
        </Layout>
    )
}

export const Signup = styled.div`
  .header {
    font-size: 3rem;
    margin-top: 20px;
    text-align: center;
    color: #FFA500;
  }

  .error {
    color: red;
    text-align: center;
    font-size: 1.4rem;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    padding: 1rem;

    label {
      font-size: 1.5rem;
      font-weight: bold;
      display: block;
      text-align: left;
      margin: 1rem 0 0.2rem;
      color: #df9f5b;
    }

    input:focus {
      border: 4px solid #4299e1;
    }

    input::placeholder {
      color: #a0aec0;
    }

    input.input-error,
    select.input-error {
      border: 4px solid #e96666;
    }

    button:disabled {
      opacity: 0.35;
    }

    input, textarea, select {
      width: 100%;
      font-size: 1.2rem;
      font-family: inherit;
      padding: 0.5rem;
      border-radius: 12px;
      outline: none;

    }

    button {
      margin: 30px 0;
      padding: 0.5rem;
      background-color: #FFA500;
      border: 1px solid #FFA500;
      cursor: pointer;
      font-family: inherit;
      font-size: 1.5rem;
      color: white;
      border-radius: 12px;
    }

    .redirect {
      color: #FFA500;

      a {
        color: white;
        padding: 1rem;
        font-size: 1.2rem;
        text-decoration: underline;
      }
    }
  }
`