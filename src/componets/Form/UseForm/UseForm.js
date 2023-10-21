import React from 'react'

const campos = [{
  id: 1,
  tipo: 'Campo Society'
},
{
  id: 2,
  tipo: 'Campo Grama'
},
{
  id: 3,
  tipo: 'Campo Areia'
}]

const UseForm = ({ data, updateFielHandler }) => {

  return (
    <div>
      <div className='form-control-use'>
        <label htmlFor='name'>Nome do Grupo:</label>
        <input
          type="text"
          name="text"
          id="name"
          placeholder='Digite o nome aqui...'
          required
          value={data.name || ''}
          onChange={(e) => updateFielHandler("name", e.target.value)} />
      </div>
      <div className='form-control-use'>
        <label htmlFor='select'>Tipo de campo</label>
        <select value={data.tipo || ''} onChange={(e) => updateFielHandler("tipo", e.target.value)}>
          {campos.map((e) => <option value={e.tipo}>{e.tipo}</option>)}
        </select>
      </div>
    </div>
  )
}

export default UseForm
