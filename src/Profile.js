import React from 'react';
import './Profile.css';
import { FaBars } from "react-icons/fa";

function Profile() {
  return (
    <div id="profile">
      <div id="profpic"></div>
      <h2>Nome</h2>
      <p>Informções pessoais</p>
      <p>Endereço</p>
      <div id="separador">
      </div>
      <div id="linha">
        <h3>
          Experiência:
        </h3>
        <p>
          Publicou livro X.
        </p>
        <h3>
          Contato:
        </h3>
        <p>
          <b>Telefone:</b> XXXX-XXXX
        </p>
        <p>
           <b>E-mail:</b> XXXX@XXXX.com
        </p>
      </div>
      <div id="separador">

      </div>
      <div id="curriculo">
        <h3>Ver Currículo</h3>
        <FaBars id="bars"/>
      </div>
    </div>
  );
}
  
export default Profile;