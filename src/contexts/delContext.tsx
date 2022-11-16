import React, { createContext } from 'react'
import { api } from '../Utils/api';
import { IChildren, INewUser } from '../Utils/interfaces';
import { toast } from 'react-toastify';
import { toastConfig } from '../Utils/toast';
import nProgress from 'nprogress';

export const DelContext = createContext({} as any);

export const DelProvider = ({children}: IChildren) => {

const deleteUser = async (cpf: string) => {
    try {
        nProgress.start()
        await api.delete(`/${cpf}`)
        toast.success("Usuário Removido", toastConfig)
    } catch (error) {
       console.error(error);
        toast.error("Algo deu errado, tente novamente", toastConfig)
    } finally {
        nProgress.done();
    }
}


  return (
    <DelContext.Provider value ={{ deleteUser }}>
    {children}
    </DelContext.Provider>
  )
}
