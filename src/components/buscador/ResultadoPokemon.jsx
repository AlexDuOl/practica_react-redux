import React from 'react';

const ResultadoPokemon = () => {
    return (
        <div>
            <h3 className="ui grey header">Resultado: </h3>
            <div className="ui yellow header">Buscando...</div>
            <div>
                <img className="ui small image" src="" alt="" />
                <span className="ui green header" >Pikachu</span>
            </div>
            <span className="ui red header">Error</span>
        </div>
    )
}

export default ResultadoPokemon;
