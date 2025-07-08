'use client';
import '@/styles/auth/page.css';
import { useState, useEffect } from 'react';
import LoginForm from '@/app/auth/login';
import RegisterForm from '@/app/auth/register';
import { firaSans } from '@/utils/fonts';
import { Suspense } from 'react';

const AuthPage = () => {

  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Suspense>
      <div className={`container ${firaSans.className}`}>
        <h1>{!showLogin && showRegister ? ('Criar Conta') : 'Login'}</h1>
        <AuthButtons setShowLogin={setShowLogin} setShowRegister={setShowRegister} showLogin={showLogin} showRegister={showRegister} />

        {!showLogin && showRegister ? (<RegisterForm setShowLogin={setShowLogin} setShowRegister={setShowRegister} />) : <LoginForm />}
      </div>
    </Suspense>
  );
}

const AuthButtons = ({ setShowLogin, setShowRegister, showLogin, showRegister }) => {
  return (
    <div className="buttons">
      <button className={`login-btn ${showLogin && !showRegister ? 'active' : ''}`} onClick={() => { setShowLogin(true); setShowRegister(false); }}>Login</button>
      <button className={`register-btn ${!showLogin && showRegister ? 'active' : ''}`} onClick={() => { setShowLogin(false); setShowRegister(true); }}>Criar Conta</button>
    </div>
  );

}

export default AuthPage;