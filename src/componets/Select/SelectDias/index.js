import './styles.css'

export const SelectDias = ({ handle }) => {
    const dias = [
        {
            id: 0,
            value: 'Selecione um dia...'
        }, {
            id: 1,
            value: 'Sábado'
        },
        {
            id: 2,
            value: 'Domingo'
        },
        {
            id: 3,
            value: 'Segunda-Feira'
        },
        {
            id: 3,
            value: 'Terça-Feira'
        },
        {
            id: 3,
            value: 'Quarta-Feira'
        },
        {
            id: 3,
            value: 'Quinta-Feira'
        },
        {
            id: 3,
            value: 'Sexta-Feira'
        }]


    return (
        <select onChange={(e) => handle(e.target.value)} >
            {dias.map((item) => <option value={item.id}>{item.value}</option>)}
        </select>
    );
};
