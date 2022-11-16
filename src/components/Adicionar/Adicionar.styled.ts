import React from "react";
import styled from "styled-components";

export const AdicionarStyled = styled.div`

    position: fixed;
    left: 50%;
    top: 49.6%;
    transform: translate(-50%, -50%);
    width: 525px;
    height: 800px;
    padding: 34px 40px;
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    text-align: center;
    border-radius: 16px;
    transition: all ease 100ms;
    
    .form-header{
        display: flex;
        align-items: center;
        justify-content: center;

        button{
            background-color: transparent;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 20px;
            font-weight: 700;
            position: relative;
            bottom: 30px;
            left: 90px;
            color: var(--cor-secundaria);
        }
    }

    form{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;

        .form-div{
            display: flex;
            justify-content: space-between;
            align-items: center;

            label{
                color: var(--cor-secundaria);
                font-size: 14px;
                font-weight: 600;
            }

            input, select{
                height: 54px;
                border-radius: 8px;
                padding: 0 20px;
                width: 300px;
                border:1px solid rgb(118, 118, 118, 0.2);
                outline: none;
                font-size: 14px;
                font-weight: 600;
            }
        }
        
        input[type=submit]{
            align-self: center;
            border-radius: 49px;
            background-color: var(--cor-secundaria);
            width: 300px;
            height: 42px;
            border: none;
            background-color: none;
            color: #ffffff;
            font-size: 14px;
            font-weight: 600;
        }
    }
`