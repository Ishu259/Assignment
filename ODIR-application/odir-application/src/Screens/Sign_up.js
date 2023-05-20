import React from 'react';
import Login from '../Components/Signup';
import Title from '../Components/Title';
import signInImg from '../Images/signinImage.jpeg';

const loginPage = () => {
    return (
        <div>
            <nav>
                <Title></Title>
            </nav>
            <div className='Main'>

                <div className='background'>
                    <img src={signInImg}></img>
                </div>
                <div class="subForm">
                    <Login></Login>
                </div>
            </div>

        </div>

    );
}

export default loginPage;