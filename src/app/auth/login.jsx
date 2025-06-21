'use client';
import '@/styles/auth/login.css'
import { useEffect, useState } from 'react';
import { signIn } from "next-auth/react";
import { redirect, useRouter } from 'next/navigation';

const LoginForm = () => {

    const [user, setUser] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);
    const router = useRouter();

    useEffect(() => {
        document.title = 'Login';
    }, [])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser(prev => ({ ...prev, [name]: value }));
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        if(user){
            try{
                
                const result = await signIn('credentials',{
                    username: user.username,
                    password: user.password,
                    redirect: false,
                });

                if(result.ok){
                    setSuccess(true);
                    setMessage('Login Efetuado!');
                    localStorage.setItem('HasLoggedIn', true);
                    router.push('/HomePage');
                }else{
                    setSuccess(false);
                    setMessage('Credenciais Inválidas!');
                }

            }catch(error){
                console.error(error);
            }
        }

        setLoading(false);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <FormGroup label={'Utilizador'} className={'txtUsername'} type={'text'} name={'username'} handleInputChange={handleInputChange} />
                <FormGroup label={'Palavra-Passe'} className={'txtPassword'} type={'password'} name={'password'} handleInputChange={handleInputChange} />
                <Alert message={message} success={success} />
                <SubmitBtn loading={loading} />
            </form>
        </div>
    );
}

const FormGroup = ({ label, className, type, name, handleInputChange }) => {
    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input onChange={handleInputChange} className={className} type={type} name={name} required />
        </div>
    );
}

const SubmitBtn = ({loading}) => {

    console.log(loading);

    return (
        <button disabled={loading} type="submit">
            Login
        </button>
    );
};

const Alert = ({ message, success }) => {
    return (
        <p style={{ color: success ? 'green' : 'red', display: message === '' ? 'none' : 'block' }} className='alertMessage'>{message}</p>
    );
}

export default LoginForm;
