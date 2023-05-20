import React from 'react';
import App from '../App';
import '/home/ishwarya/Documents/ODIR-application/odir-application/src/Styles/Register.css'
import Signup from '../Screens/Sign_up';

const register = () => {
    return (
        <div class='formOuter'>
            <div className='title'>Register</div>
            <form action='' class='formInner'>

                <input type='text' name="Full Name" placeholder='Your name..' />

                <input type='text' name="Email" placeholder='Your email..' />

                <input type='password' name="Password" placeholder='Enter Password..' />

                <input type='submit' name="Submit" value="Submit" placeholder='Submit'></input>
            </form>

            <a href={Signup}>Already have a account? Sign up</a>
        </div>
    );
}

export default register;