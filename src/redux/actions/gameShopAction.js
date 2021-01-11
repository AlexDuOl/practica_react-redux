export const BUY_GAME_HALO = 'BUY_GAME_HALO';
export const RETURN_GAME_HALO = 'RETURN_GAME_HALO';

export const buy_halo_action = (cant) => {
    return {
        type: BUY_GAME_HALO,
        payload: cant
    }
}

export const return_halo_action = (cant) => {
    return {
        type: RETURN_GAME_HALO,
        payload: cant
    }
}