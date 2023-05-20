import React from 'react';
import Register from '../Components/Register';
import Title from '../Components/Title';
import signInImg from '../Images/signinImage.jpeg';
import '../Styles/Reg_page.css';

const regPage = () => {
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
                    <Register></Register>
                </div>
            </div>

        </div>

    );
}
export default regPage;