import { loadGetInitialProps, NextPageContext } from 'next/dist/shared/lib/utils';
import React, { useEffect, useState } from 'react'
import { urlToHttpOptions } from 'url';
import { Context } from 'vm';

type TimaoProps = {
    frase: string;
    autor?: string;
}
        async function getFrase(){
            const res = await fetch('http://type.fit/api/quotes');
            const data = await res.json();
            const position =Math.floor(Math.random() * data.length);
            const frase = data[position].text;
            const autor = data[position].author;
            return{
                frase, autor
            }
        }

export default function Timao(props:TimaoProps) {
    const [frase, setFrase] = useState<string | undefined>(props.frase)
    const [autor, setAutor] = useState<string | undefined>(props.autor)
    let contador = 0;
   useEffect(()=>{

        getFrase().then((data)=>{ console.log(`Executou ${contador} vez`, data);});
        contador++;      
       
    },[frase, autor]);

  return (
    <>
    <h1>{frase?frase:"Seja muito bem vindo!"}</h1>
    {autor && <h2>{autor}</h2>}
    
    <button onClick={(e)=>setAutor("Juliana Cruz")}>Mudar Autor</button>
    <button onClick={(e)=>setAutor("Capricho! É fazer o melhor que você pode, na condição que voê tem, enquanto não tem condições melhores, pra fazer melhor ainda")}>Mudar Frase</button>
    
    
    </>

  )
}


//DRY - don't repeat yourself

Timao.getInitialProps = async (ctx:NextPageContext) => {

    const res = await fetch('http://type.fit/api/quotes');
    const data = await res.json();
    const postion = Math.floor(Math.random() * data.length);
    const frase = data[postion].text;
    const autor = data[postion].author;
    return {
        frase,
        autor:autor
}
}