import React, { ButtonHTMLAttributes } from 'react'
import styled from '@emotion/styled';
import { type } from 'os';

const ButtonData: React.FC<ButtonUnion> = styled.button`
width: 100px;
height: 30px;
border: none;
border-radius: 10px;
margin-left: 10px;
&:hover{
  background-color: #ddd;
  cursor: pointer;
}
&:disabled{
    cursor: not-allowed;
}
`

type ButtonProps={ 
   children ?: React.ReactNode;

}   

type ButtonUnion = ButtonProps | ButtonHTMLAttributes<HTMLButtonElement>;
export default function Button(props:ButtonUnion) {
  return (
    <ButtonData {...props}>{props.children}</ButtonData>
    )
}
