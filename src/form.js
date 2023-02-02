import React, {useState} from 'react';

const Form = () => {
  return (
    <>

<div>
    <div className='input_block'>
        <label for="name">Name</label>
        <input id='name' autoComplete='off' type="text" name="name" placeholder='Name:' />
    </div>
    <div className='input_block'>
        <label for="email">Email</label>
        <input id='email' autoComplete='off' type="email" name="email" placeholder='Email:' />
    </div>
    <div className='input_block'>
        <label for="password">Password</label>
        <input id='password' autoComplete='off' type="password" name="password" placeholder='Password:' />
    </div>
    <div className='input_block'>
        <label for="comment">Comment</label>
        <input id='comment' autoComplete='off' type="text" name="comment" placeholder='Comment:' />
    </div>
    <button>Send</button>
</div>
        
    </>
  )
}

export default Form;