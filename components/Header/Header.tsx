import React, {useState} from 'react'
import styles from '../../styles/Header.module.css';
import { css} from '@emotion/css';
import styled from '@emotion/styled';
import { type } from 'os';
import Input from '../Form/Input/input';
import Button from '../Form/Button/button';

const HeaderPage = styled.header`
  background-color: #e1e1e1;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  `

  type HeaderProps = { //type - TypeScript não tem interface
    menu ?: Array<string>;
    pesquisar ?: string;
    name ?: string;
  }

  /*
    interface IHeaderProps { //interface pode herdar de outra interface de outra interface tipo ou padrão
    menu ?: Array<string>;
    pesquisar ?: string;
    name ?: string;
  }
*/

//CSS
//5 Maneiras diferentes de utilizar CSS
//1. Importar o CSS no arquivo .tsx
//import './Header.css'
//2. Utilizando o CSS Module
//import styles from './Header.module.css'
//3. Utilzando styled-components ou Sass
//import styled from 'styled-components'
//4. Utilizando estilização direto no componente
//Utilizando  o CSS-in-JS
//5. usando algumas bibliotecas de estilização
//Ex: Material-UI - 4 usa styled-components -5 usa Emotion CSS
export default function Header(props: HeaderProps) {

// sempre que vamos trabalhar com state, para armazenar valores
//remos os getters e setters. get para recuperar valores e set para alterar valores
const [userAuth, setUserAuth] = useState<boolean>(true); //valor inicial dela é false - useState é um hook do React
const [nameUser, setNameUser] = useState<string | undefined>(props.name);
    
  return (
// <header className={styles['menu-site']}> // utilizando CSS Module    
<HeaderPage>
    <div>Logotipo</div>
    <nav>
      <ul className={ css` 
        width: 90%; 
        display: inline-flex; 
        margin: 0px;
        padding: 0;
        > li {
          text-align: center;
          list-style:none;
          min-width: 120px;
        }
      `
        
        }>
        <li>Home</li>
        <li>Produtos</li>
        <li>Serviços</li>
        <li>Contato</li>
      </ul>

    </nav>   
   {userAuth && (<div> 
      <span>Seja bem vindo(a) {nameUser?nameUser:"visitente"}</span>
      </div>) }

      <div>
        <Input type="text" placeholder="Pesquisar"/>   
        <Button disabled>{props.pesquisar? props.pesquisar:"Search"}</Button> 
      </div>
 
</HeaderPage>
//</header>
  )
}
