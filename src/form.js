import React from 'react';
import * as yup from 'yup';
import { useFormik } from 'formik';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            comment: "",
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "name must have 2 characters").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "password must have 6 characters").required(),
            comment: yup.string().min(5, "comment must have 5 characters").required(),
        }),

        onSubmit: (values, { resetForm }) => {

            console.log(values)
            resetForm({ values: '' })
        },
    });
    console.error(formik.errors);

    return (
        <>
            <form onSubmit={formik.handleSubmit}>

                <div className='input_block'>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" name="name" placeholder='Name:' onChange={formik.handleChange} value={formik.values.name} />
                    {formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>}
                </div>

                <div className='input_block'>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" name="email" placeholder='Email:' onChange={formik.handleChange} value={formik.values.email} />
                    {formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>}
                </div>

                <div className='input_block'>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" name="password" placeholder='Password:' onChange={formik.handleChange} value={formik.values.password} />
                    {formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>}
                </div>

                <div className='input_block'>
                    <label htmlFor="comment">Comment</label>
                    <input id='comment' type="text" name="comment" placeholder='Comment:' onChange={formik.handleChange} value={formik.values.comment} />
                    {formik.touched.comment && formik.errors.comment && <span>{formik.errors.comment}</span>}
                </div>


                <p>{formik.values.name}</p>
                <p>{formik.values.email}</p>
                <p>{formik.values.password}</p>
                <p>{formik.values.comment}</p>
                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default Form;