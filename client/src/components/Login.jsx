import React from 'react'

const Login = () => {
    return (
        <div className='login'>
            <div className='container'>
                <img src='https://assets.myntassets.com/f_webp,dpr_1.5,q_auto,w_400,c_limit,fl_progressive/assets/images/2023/10/30/b7eb4f88-4a93-4b68-beac-982d29be81671698648116564-Flat_500--1-.jpg'></img>
                <div className='sub'>
                    <h3><p>Login</p> or <p className='signup'>SignUp</p></h3>
                    <span>+91 | <input placeholder='Mobile number'></input></span>
                    <p>By continuing, i agree to the <p className='pink'>terms of use</p> and <p className='pink'>privacy policy</p></p>
                    <button>CONTINUE</button>
                    <p>Having trouble in logging in? <p className='pink'>Get Help</p></p>
                </div>
            </div>
        </div>
    )
}

export default Login
