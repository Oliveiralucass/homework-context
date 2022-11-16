import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { EditarStyled } from './Editar.styled'
import { INewUser } from '../../Utils/interfaces'
import { EditContext } from '../../contexts/editContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export const Editar = () => {
  
  const { state } = useLocation();
  const navigate = useNavigate();


  const { register, handleSubmit } = useForm<INewUser>();
  const { editUser } = useContext(EditContext);

  const changeUser = (data:INewUser) =>{
    editUser(data);
    navigate('/');
  };

  return (
  <EditarStyled>
    <div className='form-header'>
      <h2>Editar usuário</h2>
    </div>

    <form onSubmit={handleSubmit(changeUser)}>
      <div className='form-div'>
        <label htmlFor='nome'>Nome Completo</label>
        <input type='text' id='nome' required defaultValue={state?.nome} { ...register('nome')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='cpf'>CPF</label>
        <input type='text' id='cpf' required value={state?.cpf} { ...register('cpf')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='rg'>RG</label>
        <input type='text' id='rg' required defaultValue={state?.rg} { ...register('rg')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='cnh'>CNH</label>
        <input type='text' id='cnh' required defaultValue={state?.cnh} { ...register('cnh')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='nomeMae'>Nome da Mãe</label>
        <input type='text' id='nomeMae' required defaultValue={state?.nomeMae} { ...register('nomeMae')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='nomePai'>Nome do Pai</label>
        <input type='text' id='nomePai' required defaultValue={state?.nomePai} { ...register('nomePai')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='tituloEleitor'>Título de eleitor</label>
        <input type='text' id='tituloEleitor' required defaultValue={state?.tituloEleitor} { ...register('tituloEleitor')}/>
      </div>

      <div className='form-div'>
        <label htmlFor='sexo'>Sexo</label>
        <select id='sexo' required defaultValue={state?.sexo} { ...register('sexo')}>
          <option value='F'>Feminino</option>
          <option value='M'>Masculino</option>
        </select>
      </div>

      <input type='submit' value='Editar usuário'/>
    </form>
  </EditarStyled>
  );
};
