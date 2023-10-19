import './styles.css'

export const SelectCampo = ({ handle }) => {
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


    return (
        <select onChange={(e) => handle(e.target.value)} >
            {campos.map((campos) => <option value={campos.id}>{campos.tipo}</option>)}
        </select>
    );
};
