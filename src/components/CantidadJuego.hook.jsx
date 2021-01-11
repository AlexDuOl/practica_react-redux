import React from 'react';
import { useSelector } from 'react-redux';

const CantidadJuegoHook = () => {
    const game_shop = useSelector((state) => state.game_shop);

    return (
        <React.Fragment>
            Unidades: {game_shop.halo}
        </React.Fragment>
    )
}

export default CantidadJuegoHook;