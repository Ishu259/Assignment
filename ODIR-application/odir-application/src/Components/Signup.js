import React from 'react';
import Signup from '../Screens/Sign_up';
const login = () => {
    return (
        <div class='formOuter'>
            <div className='title'>Login</div>
            <form action='' class='formInner'>

                <input type='text' name="Email" placeholder='Your email..' />

                <input type='password' name="Password" placeholder='Enter Password..' />

                <input type='submit' name="Submit" value="Submit" placeholder='Submit'></input>
            </form>

            <a href={Signup}>Don't have an account? Sign in</a>
        </div>
    );
}

export default login;