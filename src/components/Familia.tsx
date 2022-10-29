// 27/10/22
import React, { cloneElement } from 'react'

type myProps = {
  sobrenome: string,
  children: []
}



function Familia(props: myProps) {
  return (
    <div>{props.children.map((e, i) => {
      return cloneElement(e, { ...props, key: i })

    })}</div>
  )
}

export default Familia