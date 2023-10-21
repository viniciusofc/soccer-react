import React from 'react'
import './styles.css'

import { AiOutlineUser, AiOutlineClockCircle, AiOutlineSend} from 'react-icons/ai';

const Steps = ({ currentStep }) => {
  return (
    <div className='steps'>
      <div className='step active'>
        <AiOutlineUser />
        <p>
          Identificação
        </p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineClockCircle />
        <p>
          Dia / Hora
        </p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <AiOutlineSend />
        <p>
          Finalizar
        </p>
      </div>
    </div >
  )
}

export default Steps
