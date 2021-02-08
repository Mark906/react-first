import React from 'react';

function Stampa() {
    const stampa = () => {
        console.log('Stampa.');
    }
    return (
        <button onClick={stampa}>Cliccami</button>
    )
}

export default Stampa; //Esporto il componente Stampa.
