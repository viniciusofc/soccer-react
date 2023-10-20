import './styles.css'

export const SelectDias = ({ handle }) => {
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


    return (
        <select onChange={(e) => handle(e.target.value)} >
            {dias.map((item) => <option value={item.id}>{item.value}</option>)}
        </select>
    );
};
