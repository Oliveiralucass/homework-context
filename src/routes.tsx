import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { UserProvider } from './contexts/UserContext'
import { Busca } from './pages/Busca/Busca'
import { Lista } from './pages/Lista/Lista'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import 'nprogress/nprogress.css'
import { DelProvider } from './contexts/delContext'
import { EditProvider } from './contexts/editContext'
import { Editar } from './pages/Editar/Editar'


export const AppRoutes = () => {
  return (
    <BrowserRouter>
    <ToastContainer />
      <UserProvider>
      <DelProvider>
      <EditProvider>
        <Routes>
          <Route path='/' element={<Lista />} />
          <Route path='/busca' element={<Busca />} />
          <Route path='/edit' element={<Editar />} />
        </Routes>
      </EditProvider>
      </DelProvider>
     </UserProvider>
    </BrowserRouter>
  )
}
