import './ListaDropdown.css'

const ListaDropdown = (props) => {
    return (
        <div className="lista-dropdown">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaDropdown;
