'use client';
import '@/styles/auth/register.css'
import { useEffect } from 'react';

const RegisterForm = () => {

    useEffect(() => {
        document.title = 'Criar Conta';
    }, [])

    return (
        <div className="register-container">
            <form>
                <FormGroup label={'Utilizador'} className={'txtUsername'} type={'text'} />
                <FormGroup label={'Email'} className={'txtEmail'} type={'email'} />
                <FormGroup label={'Palavra-Passe'} className={'txtPassword'} type={'password'} />
                <SubmitBtn />
            </form>
        </div>
    );
}

const FormGroup = ({ label, className, type }) => {
    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input className={className} type={type} required />
        </div>
    );
}

const SubmitBtn = () => {
    return (
        <button type='submmit'>Criar Conta</button>
    );
}

export default RegisterForm;