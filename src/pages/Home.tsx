import React from 'react'
import Card from "../layout/Card";
import Sorteio from "../components/Sorteio";
import Familia from "../components/Familia";
import FamiliaMembro from "../components/FamiliaMembro";

function Home() {
  return (
    <div>
      <h1>Home</h1>

      <div className="Cards">
        <Card titulo="Título do card" color="#080">
          <Sorteio minimo={10} maximo={30} />
        </Card>

        <Card titulo="Título do card 2">
          <h1>Bom dia!</h1>
          <h2>Linha teste</h2>
        </Card>

        <Card titulo="Família">
          <Familia sobrenome="Silva">
            <FamiliaMembro nome="Maria" sobrenome='Ferreira' />
            <FamiliaMembro nome="João" sobrenome='Ferreira' />
          </Familia>
        </Card>

      </div>
    </div>

  )
}

export default Home