import React from 'react';
import { useSelector } from 'react-redux';

const ResultadoPokemon = () => {
    const buscador = useSelector((state) => state.buscador);

    return (
        <div>
            <h3 className="ui grey header">Resultado: </h3>
            {buscador.loading && <div className="ui yellow header">Buscando...</div>}
            {buscador.pokemon.length >= 1 && 
                <div>
                    <img className="ui small image" src={buscador.pokemon[0].sprites.front_default} alt="Pokemon" />
                    <span className="ui green header">{buscador.pokemon[0].name}</span>
                </div>
            }
            {buscador.error !== '' && <span className="ui red header">{buscador.error}</span>}
        </div>
    )
}

export default ResultadoPokemon;
