import React from 'react'

type myProps = {
  nome: string,
  sobrenome: string
}

function FamiliaMembro(props : myProps) {

  //console.log(props)

  return (
    <div>{props.nome} {props.sobrenome}</div>
  )
}

export default FamiliaMembro