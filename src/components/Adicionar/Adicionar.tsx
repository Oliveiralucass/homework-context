import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { AdicionarStyled } from './Adicionar.styled'
import { INewUser } from '../../Utils/interfaces'
import { UserContext } from '../../contexts/UserContext'

export const Adicionar = () => {
  
  const closeModal = () => {
    document.getElementById("add-modal")?.classList.toggle('hide');
    document.getElementById("main")?.classList.toggle('blur');
  };

  const { register, handleSubmit } = useForm<INewUser>();
  const { createNewUser } = useContext(UserContext);

  const addUser = (data:INewUser) =>{
    createNewUser(data);
    closeModal();
  };

  return (
  <AdicionarStyled>
    <div className='form-header'>
      <h2>Adicionar novo usuário</h2>
      <button onClick={closeModal}>x</button>
    </div>

    <form onSubmit={handleSubmit(addUser)}>
      <div className='form-div'>
        <label htmlFor='nome'>Nome Completo</label>
        <input type='text' id='nome' required { ...register('nome')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='cpf'>CPF</label>
        <input type='text' id='cpf' required { ...register('cpf')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='rg'>RG</label>
        <input type='text' id='rg' required { ...register('rg')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='cnh'>CNH</label>
        <input type='text' id='cnh' required { ...register('cnh')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='nomeMae'>Nome da Mãe</label>
        <input type='text' id='nomeMae' required { ...register('nomeMae')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='nomePai'>Nome do Pai</label>
        <input type='text' id='nomePai' required { ...register('nomePai')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='tituloEleitor'>Título de eleitor</label>
        <input type='text' id='tituloEleitor' required { ...register('tituloEleitor')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='sexo'>Sexo</label>
        <select id='sexo' required { ...register('sexo')}>
          <option value='F'>Feminino</option>
          <option value='M'>Masculino</option>
        </select>
      </div>

      <input type='submit' value='Adicionar usuário'/>
    </form>

  </AdicionarStyled>
  );
};
