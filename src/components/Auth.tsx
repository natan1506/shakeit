import { useContext } from 'react';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/auth.module.css';


export function Auth() {
  
  

  return (
    <div className={styles.container}>
      <div className={styles.logoGrad}>
        <img src="icons/logo-grad.svg" alt="Logo Gradiente"/>
      </div>
      <div className={styles.loginContainer}>
        <div className={styles.logoEscrita}>
          <img src="icons/logo.svg" alt="Logo"/>
        </div>
        <div className={styles.bemVindo}>
          <h3>Bem-vindo</h3>
          <p>
            <img src="icons/github.svg" alt="Logo Github"/>
            <span>Faça login com seu Github para começar</span>
          </p>
        </div>
        <div className={styles.login}>
          <input type="text" placeholder="Digite seu username"/>
          <button>
            <img src="icons/right.svg" alt="Entrar"/>
          </button>
        </div>
      </div>
    </div>
  )
}