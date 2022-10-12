import Layout from "../../layout/LayoutComponent";
import {InitialFormValues, initialValues, validateFunction} from "../../validation/validation";
import {useFormik} from "formik";
import {SignupSchema} from "../../validation/schemaValidation";
import styled from "styled-components";
import Link from "next/link";

export const NewAccountCreate = () => {
    const onSubmit = async (values: InitialFormValues, actions: any) => {
        // post
        actions.resetForm();
    }

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit
    } = useFormik({initialValues, validationSchema: SignupSchema, validate: validateFunction, onSubmit});
    return (
        <Layout title='Create new account' description='Register new account'
                keywords='new account, profile, register, create'>
            <Signup>
                <p className='header'>Create new account</p>
                <form onSubmit={handleSubmit} autoComplete="off">
                    <label htmlFor="firstname">First Name</label>
                    <input
                        value={values.firstname}
                        onChange={handleChange}
                        id="firstname"
                        type="firstname"
                        placeholder="Enter First Name"
                        onBlur={handleBlur}
                        className={errors.firstname && touched.firstname ? "input-error" : ""}
                    />
                    {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
                    <label htmlFor="lastname">Last Name</label>
                    <input
                        value={values.lastname}
                        onChange={handleChange}
                        id="lastname"
                        type="lastname"
                        placeholder="Enter Last Name"
                        onBlur={handleBlur}
                        className={errors.email && touched.email ? "input-error" : ""}
                    />
                    {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
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
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm password"
                        value={values.confirmPassword}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                            errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
                        }
                    />
                    {errors.confirmPassword && touched.confirmPassword && (
                        <p className="error">{errors.confirmPassword}</p>
                    )}
                    <button disabled={isSubmitting} type="submit">
                        Sign Up
                    </button>
                    <span className='redirect'>Already have an account <Link href='/login'>Sign in</Link></span>
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
