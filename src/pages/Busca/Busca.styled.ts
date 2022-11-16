import React from 'react'
import styled from 'styled-components'
export const Container = styled.div`
    display: flex;

    .blur {
        filter: blur(1rem);
    }
    
    .hide{
        display: none;
    }
`   

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    background-color: var(--cor-bg);
    width: 100%;
    height: 100%;
    min-height: 100vh;
    transition: all ease 100ms;
    
    .header-container{
        margin-left: 21px;
        margin-top: 17px;

        h1{
            color: #494949;
            font-size: 21px;
            font-weight: 500;
        };
    };

    .tabela{
        max-width: 1200px;
        margin: 100px auto;
        background-color: #FFFDFD;
        border-radius: 12px;

        .tabela-header{
            display: flex;
            margin: 12px 20px;
            align-items: center;
            gap: 20px;

            input{
                height: 54px;
                border-radius: 8px;
                padding: 0 20px;
                width: 300px;
                border:1px solid rgb(118, 118, 118, 0.2);
                outline: none;
                font-size: 14px;
                font-weight: 600;
            };

            button{
                border-radius: 49px;
                background-color: var(--cor-secundaria);
                width: 220px;
                border: none;
                background-color: none;
                color: #ffffff;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            };
        };
    };
`

export const TabelaStyled = styled.table`
    width: 1200px;
    border-collapse: collapse;
    background-color: #FFFDFD;
    border-radius: 12px;
    box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.25);

    thead{
        background-color: var(--cor-principal);
        color: #fefefe;
        text-align: center;

        th{
            padding: 16px 0;
        };
    };

    tbody{
        color: var(--cor-principal);
        text-align: justify;
        column-span: 9;
        text-align: justify;
        
        tr{
            border-bottom: 1px solid #575757;
           
            td:first-child{
                padding-left: 20px;
            };

            td:last-child{
                display: flex;
                gap: 6px;
                padding-right: 20px;
            };
        };
        
        tr:last-child{
            border-bottom: none;
        };

        td{
            padding: 16px 0;
            color: #575757;
            font-size: 15px;
            font-weight: 500;
        };

        button{
            border-radius: 36px;
            background-color: var(--cor-secundaria);
            outline: none;
            border: none;
            padding: 6px 18px;
            cursor: pointer;
        };
    };
`