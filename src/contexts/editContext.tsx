import React, { createContext } from 'react'
import { api } from '../Utils/api';
import { IChildren, INewUser } from '../Utils/interfaces';
import { toast } from 'react-toastify';
import { toastConfig } from '../Utils/toast';
import nProgress from 'nprogress';

export const EditContext = createContext({} as any);

export const EditProvider = ({children}: IChildren) => {
  const editUser = async (data: INewUser) => {
    try{
      nProgress.start()
      await api.put(`/${data.cpf}`, data );
      toast.success("Usuário editado!", toastConfig);
    } catch (error){
        console.error(error);
        toast.error("Algo deu errado, tente novamente", toastConfig);
    } finally{
        nProgress.done();
    };
  };


  return (
    <EditContext.Provider value ={{ editUser }}>
    {children}
    </EditContext.Provider>
  );
}
