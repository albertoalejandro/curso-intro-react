import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() { // quién llame a nuestro componente TodoSearch nos debe enviar 2 props

    //const estado = React.useState(); // para agregar estado a nuestros componentes
    //const [searchValue, setSearchValue] = React.useState(''); // Lo movemos al componente padre: App.js

    const { searchValue, setSearchValue } = React.useContext(TodoContext);

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Cebolla" 
            value={searchValue} // -> el valor de nuestro input debe ser igual a nuestro estado
            onChange={onSearchValueChange}
            //onChange={() => setSearchValue('Enrique')}
        />
    );
}

export { TodoSearch };