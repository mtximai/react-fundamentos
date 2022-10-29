import React from 'react'

type myProps = {
  minimo: number
  maximo: number
}

export default function Sorteio(props: myProps) {

  const {minimo, maximo} = props

  const sorteio = minimo + Math.ceil(Math.random() * (maximo - minimo))

  return (
    <h2>Número sorteado entre {minimo} e {maximo} é {sorteio.toString()}</h2>
  ) 
    
}
