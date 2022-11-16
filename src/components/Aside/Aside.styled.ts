import React from "react"
import styled from "styled-components"

export const Container = styled.aside`
    display: flex;
    flex-direction: column;
    color: #ffffff;
    background-color: var(--cor-principal);
    width: 287px;

    .logo{
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;

        img{
            width: 96px;
            height: 108px;
        }

        span{
            font-size: 12px;
            font-weight: 700;
        }
    }

    .menu{
        display: flex;
        flex-direction: column;
        margin-left: 28px;
        gap: 12px;
        
        span{
            color: #C3C0C0;
            font-size: 12px;
            font-weight: 400;
        }

        div{
            display: flex;
            gap: 12px;

        }
    }
    a{
        font-size: 14px;
        font-weight: 500;
        color: #C3C0C0;
    }
`   
