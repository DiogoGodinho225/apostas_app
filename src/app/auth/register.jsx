'use client';
import '@/styles/auth/register.css'
import { useEffect, useState } from 'react';
import { register } from '@/services/authApi';

const RegisterForm = ({ setShowLogin, setShowRegister }) => {

    const [user, setUser] = useState({ username: '', email: '', password: '' });
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        document.title = 'Criar Conta';
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }))
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (user) {
            try {
                const result = await register(user);

                if (result.status === 200 && result.data.success === true) {
                    setMessage(result.data.message);
                    setSuccess(true);

                    setUser({ username: '', email: '', password: '' });

                    setTimeout(() => {
                        setMessage('');
                        setSuccess(false);
                        setShowLogin(true);
                        setShowRegister(false);
                    }, 2000);

                }else{
                    setMessage(result.data.message);
                }

            } catch (error) {
                console.error(error);
            }
        }
        setLoading(false);
    }

    return (
        <div className="register-container">
            <form onSubmit={handleRegister}>
                <FormGroup label={'Utilizador'} className={'txtUsername'} value={user.username} type={'text'} handleInputChange={handleInputChange} name={'username'}/>
                <FormGroup label={'Email'}  className={'txtEmail'} value={user.email} type={'email'} handleInputChange={handleInputChange} name={'email'}/>
                <FormGroup label={'Palavra-Passe'} className={'txtPassword'} value={user.password} type={'password'} handleInputChange={handleInputChange} name={'password'}/>
                <Alert message={message} success={success} />
                <SubmitBtn loading={loading} />
            </form>
        </div>
    );
}

const FormGroup = ({ label, className, value, type, handleInputChange, name }) => {
    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input className={className} value={value} type={type} onChange={handleInputChange} name={name} required />
        </div>
    );
}

const SubmitBtn = ({loading}) => {
    return (
        <button disabled={loading} type='submit'>Criar Conta</button>
    );
}

const Alert = ({ message, success }) => {
    return (
        <p style={{ color: success ? 'green' : 'red', display: message === '' ? 'none' : 'block' }} className='alertMessage'>{message}</p>
    );
}

export default RegisterForm;