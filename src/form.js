import React from 'react';
import { useFormik } from 'formik';

const Form = () => {

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            comment: "",
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: '' })
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>

                <div className='input_block'>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" name="name" placeholder='Name:' onChange={formik.handleChange} value={formik.values.name} />
                </div>

                <div className='input_block'>
                    <label htmlFor="email">Email</label>
                    <input id='email' type="email" name="email" placeholder='Email:' onChange={formik.handleChange} value={formik.values.email} />
                </div>

                <div className='input_block'>
                    <label htmlFor="password">Password</label>
                    <input id='password' type="password" name="password" placeholder='Password:' onChange={formik.handleChange} value={formik.values.password} />
                </div>

                <div className='input_block'>
                    <label htmlFor="comment">Comment</label>
                    <input id='comment' type="text" name="comment" placeholder='Comment:' onChange={formik.handleChange} value={formik.values.comment} />
                </div>

                <button type='submit'>Send</button>
            </form>
        </>
    )
}

export default Form;