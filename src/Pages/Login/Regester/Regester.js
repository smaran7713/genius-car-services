import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import "./Register.css";

const Regester = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login');
    }

    const handleRegister = event => {
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-center'>Please Regester</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id=''  placeholder='Your Name' />                
                <input type="email" name="email" id='' placeholder='Email Address' required/>               
                <input type="password" name="password" id='' placeholder='password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>

        </div>
    );
};

export default Regester;