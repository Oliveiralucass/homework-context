import React, { useState, useEffect, useContext } from 'react'
import { Aside } from '../../components/Aside/Aside'
import { Container, Main, TabelaStyled } from './Busca.styled'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTrashAlt, FaEdit, FaSearch } from 'react-icons/fa'
import { Adicionar } from '../../components/Adicionar/Adicionar'
import { api } from '../../Utils/api'
import { IChildren, INewUser } from '../../Utils/interfaces'
import { DelContext } from '../../contexts/delContext'
import { Editar } from '../Editar/Editar'
import { useNavigate } from 'react-router-dom'

export const Busca:React.FC<IChildren> = () => {

  const navigate = useNavigate();
  const { deleteUser } = useContext(DelContext);

  const [ cadastros, setCadastros ] = useState<INewUser[]>();
  const getData = async () =>{
    const { data } = await api.get('');
    setCadastros(data);
  };
  useEffect(() =>  {
    getData();
  }, [cadastros])

  const [ pesquisa, setPesquisa ] = useState<string>();
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setPesquisa(event.target.value);
  };

  return ( 
    <Container>
      <Aside />

      <Main id='main' >
        <div className='header-container'>
          <GiHamburgerMenu size={20}/> 
          <h1>PESQUISAR POR CPF</h1>
        </div>

        <div className='tabela'>
          <div className='tabela-header'>
            <FaSearch size={24}/>
            <input onChange={handleChange} type="text" placeholder='Buscar CPF...'/>
          </div>

          <TabelaStyled>
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>RG</th>
                <th>CNH</th>
                <th>Nome da mãe</th>
                <th>Nome do pai</th>
                <th>Título de eleitor</th>
                <th>Sexo</th>
                <th>Ações</th>
              </tr>
            </thead>
                
            <tbody>
              {pesquisa && cadastros?.map((cadastro) => {
                if(cadastro.cpf.includes(pesquisa)){
                  return <tr key={cadastro.cpf}>
                    <td>{cadastro.nome}</td>
                    <td>{cadastro.cpf}</td>
                    <td>{cadastro.rg}</td>
                    <td>{cadastro.cnh}</td>
                    <td>{cadastro.nomeMae}</td>
                    <td>{cadastro.nomePai}</td>
                    <td>{cadastro.tituloEleitor}</td>
                    <td>{cadastro.sexo}</td>
                    <td>
                      <button onClick={() => {navigate('/edit', {state: cadastro})}}><FaEdit fill='#ffffff' size={16}/></button>
                      <button onClick={() => {deleteUser(cadastro.cpf); navigate('/')}}><FaTrashAlt fill='#ffffff' size={16}/></button>
                    </td>
                  </tr>
                }
              })}
            </tbody>
          </TabelaStyled>
        </div>
      </Main>

      <div id='add-modal' className='hide'>
        <Adicionar />
      </div>

      <div id='edit-modal' className='hide'>
        <Editar />
      </div>
    </Container>
  );
};
