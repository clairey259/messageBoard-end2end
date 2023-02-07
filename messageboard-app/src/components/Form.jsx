import React from 'react';
import Styles from '../App.module.scss'

const Form = () => {
  return (
    <div className={Styles.form}>
        <p>Name:</p>
        <input type="text" placeholder='Enter your name'/>
        <p>Message:</p>
        <input type="text" placeholder='Enter a message'/>
    </div>
  )
}

export default Form