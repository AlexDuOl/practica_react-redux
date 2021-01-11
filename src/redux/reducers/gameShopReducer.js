import { BUY_GAME_HALO, RETURN_GAME_HALO } from "../actions/gameShopAction";

const default_game_shop = {
    halo: 30
}

const game_shop = (state = default_game_shop, action) => {
    switch (action.type) {
        case BUY_GAME_HALO: {
            return {
                ...state,
                halo: state.halo - action.payload
            }
        }
        case RETURN_GAME_HALO: {
            return {
                ...state,
                halo: state.halo + action.payload
            }
        }
        default: return state;
    }
}

export default game_shop;