import React from 'react'

const Thanks = ({ data }) => {
  return (
    <div>
      <h3 style={{textAlign:'center'}}>Confirmar informações do Grupo?</h3>
      <div className='container-dados'>
        <label>Nome do Grupo:</label>
        <p>{data.name}</p>
        <label>Tipo de Campo:</label>
        <p>{data.tipo}</p>
        <label>Hora Inicial:</label>
        <p>{data.horaInicial}</p>
        <label>Hora Final:</label>
        <p>{data.horaFinal}</p>
      </div>
    </div>
  )
}

export default Thanks
