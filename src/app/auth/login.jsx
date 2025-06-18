'use client';
import '@/styles/auth/login.css'
import { useEffect, useState  } from 'react';
import { login } from '@/services/auth';

const LoginForm = () => {

    const [user, setUser] = useState({username: '', password: ''});

    useEffect(()=>{
        document.title = 'Login';
    },[])

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUser(prev => ({...prev, [name]: value}))
    }

    return(
        <div className="login-container">
            <form>
                <FormGroup label={'Utilizador'} className={'txtUsername'} type={'text'} name={'username'} handleInputChange={handleInputChange}/>
                <FormGroup label={'Palavra-Passe'} className={'txtPassword'} type={'password'} name={'password'} handleInputChange={handleInputChange}/>
                <SubmitBtn user={user}/>
            </form>
        </div>        
    );
}

const FormGroup = ({label, className, type, name, handleInputChange}) => {
    return (
        <div className='form-group'>
            <label>{label}:</label>
            <input onChange={handleInputChange} className={className} type={type} name={name} required />
        </div>
    );
}

const SubmitBtn = ({ user }) => {
    
  const handleLogin = async () => {
    if (user) {
      try {
        const result = await login(user);
        if (result.status === 200) {
          alert('Login feito com sucesso!');
        }
      } catch (error) {
        alert('Falha no login');
      }
    }
  };

  return (
    <button onClick={handleLogin} type="button">
      Login
    </button>
  );
};

export default LoginForm;
