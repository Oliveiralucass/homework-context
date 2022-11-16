import React, { createContext } from 'react'
import { api } from '../Utils/api';
import { IChildren, INewUser } from '../Utils/interfaces';
import { toast } from 'react-toastify';
import { toastConfig } from '../Utils/toast';
import nProgress from 'nprogress';

export const UserContext = createContext({} as any);

export const UserProvider = ({children}: IChildren) => {

  const createNewUser = async (user: INewUser) => {

    try{
        nProgress.start();
        await api.post('', user);
        toast.success("Usuário Cadastrado!", toastConfig);
    } catch (error) {
       console.error(error);
        toast.error("Algo deu errado, tente novamente", toastConfig);
    } finally {
        nProgress.done();
    };
  };


  return (
    <UserContext.Provider value ={{ createNewUser }}>
    {children}
    </UserContext.Provider>
  );
};
