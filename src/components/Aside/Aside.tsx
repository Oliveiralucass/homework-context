import React from 'react'
import logo from '../../assets/Logo.svg'
import { FaSearch, FaUserCircle } from 'react-icons/fa'
import { Container } from './Aside.styled'
import { Link } from 'react-router-dom'

export const Aside = () => {
  return (
    <>
    <Container>
      <div className='logo'>
      <Link to={"/"}><img src={logo} alt="Logo" /></Link>
        <span>Admin Panel</span>
      </div>

      <div className='menu'>
        <span>Menu</span>
        <div>
          <FaUserCircle fill="#ffffff" size={18}/>
          <Link to={"/"}>Lista de Usuários</Link>
        </div>
        
        <div>
          <FaSearch fill="#ffffff" size={18}/>
          <Link to={"/busca"}>Pesquisar por CPF</Link>
        </div>
      </div>
    </Container>
    </>
  )
}
