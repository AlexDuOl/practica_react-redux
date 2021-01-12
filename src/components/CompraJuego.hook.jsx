import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_halo_action, return_halo_action } from '../redux/actions/gameShopAction';

const ComprarJuegoHook = () => {

    const dispatch = useDispatch();

    return (
        <div>
            <button className="ui secondary button" onClick={() => {
                dispatch(buy_halo_action(1))
            }}>Comprar</button>
            <br/>
            <button className="ui button" onClick={() => {
                dispatch(return_halo_action(1))
            }}>Devolver</button>
        </div>
    )
}

export default ComprarJuegoHook;