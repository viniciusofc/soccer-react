import React from 'react'
import './ReviewForm.css'
import { useState } from 'react';


const dias = [
  {
    id: 0,
    value: 'Selecione um dia...'
  },
  {
    id: 1,
    value: 'Segunda-Feira'
  },
  {
    id: 2,
    value: 'Terça-Feira'
  },
  {
    id: 3,
    value: 'Quarta-Feira'
  },
  {
    id: 4,
    value: 'Quinta-Feira'
  },
  {
    id: 5,
    value: 'Sexta-Feira'
  },
  {
    id: 6,
    value: 'Sábado'
  },
  {
    id: 7,
    value: 'Domingo'
  },]

const ReviewForm = ({ data, updateFielHandler }) => {

  const hourMask = value => {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{2})(\d)/, '$1:$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{2})(\d)/, '$1:$2')

  }

  return (
    <div className='review-form'>
      <div className='form-control-use'>
        <label htmlFor='name'>Dia da Semana</label>
        <select value={data.dia || ''} onChange={(e) => updateFielHandler('dia', e.target.value)} >
          {dias.map((item) => <option value={item.id}>{item.value}</option>)}
        </select>
      </div>
      <div className='form-control-use'>
        <label htmlFor='select'>Hora Inicial</label>
        <input type="text" maxLength={5} value={data.horaInicial || ''} onChange={(e) => updateFielHandler('horaInicial', hourMask(e.target.value))} placeholder='00:00' />
        <label htmlFor='select'>Hora Final</label>
        <input type="text" maxLength={5} value={data.horaFinal || ''} onChange={(e) => updateFielHandler('horaFinal', hourMask(e.target.value))} placeholder='00:00' />
      </div>
    </div>
  )
}

export default ReviewForm
