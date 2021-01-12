import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('mewtwo');

    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label htmlFor="buscar_pokemon" className="header">Buscar Pokemon</label>
                    <input type="text" className="form-control" id="buscar_pokemon" 
                        value={pokemon_name}
                        onChange={
                            (event) => {
                                event.preventDefault();
                                set_pokemon_name(event.target.value);
                            }
                        }    
                    />
                </div>
                <button className="ui button" type="submit" onClick={
                    () => {
                        dispatch(fetchPokemon(pokemon_name))
                    }
                }>Enviar</button>
            </form>
        </div>
    )
}

export default BuscadorPokemon;