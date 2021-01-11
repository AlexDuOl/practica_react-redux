// import { createStore } from "redux";
const createStore = require('redux').createStore;
const combineReducers = require('redux').combineReducers;

//##### Actions
const BUY_GAME_POKEMON = 'BUY_GAME_POKEMON';
const RETURN_GAME_POKEMON = 'RETURN_GAME_POKEMON';

const buy_game_action = (cant) => {
    return {
        type: BUY_GAME_POKEMON,
        payload: cant
    }
}

const return_game_action = (cant) => {
    return {
        type: RETURN_GAME_POKEMON,
        payload: cant
    }
}

const BUY_CONSOLE_SWITCH = 'BUY_CONSOLE_SWITCH';
const buy_switch_action = (cant) => {
    return {
        type: BUY_CONSOLE_SWITCH,
        payload: cant
    }
}

//##### Reducers
// Definiendo el estado inicial
const default_games_state = {
    game_pokemon: 10,
    game_yoshi: 10
}

const default_consoles_state = {
    ps5: 30,
    nSwitch: 30
}

// Definiendo el reducer con el estado inicial
const games_reducer = (state = default_games_state, action) => {
    switch(action.type){
        case BUY_GAME_X: {
            return {
                ...state, // Agregando los estados anteriores
                game: state.game - action.payload
            }
        }
        case RETURN_GAME_X: {
            return {
                ...state,
                game: state.game + action.payload
            }
        }
        default: return state;
    }
}

const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_CONSOLE_SWITCH: {
            return {
                ...state,
                nSwitch: state.nSwitch - action.payload
            }
        }
        default: return state;
    }
}

// Combinando reductores
const rootReducers = combineReducers({
    games_reducer,
    consoles_reducer
})

//##### Store
const store = createStore(rootReducers); // Pasando el reducer al store
console.log('Estado inicial: ', store.getState());

// Actualizando el estado del store
store.subscribe(() => {
    console.log('Cambio de estado: ', store.getState());
})

// Enviando la accion
store.dispatch(buy_game_action(3));
store.dispatch(return_game_action(2));

store.dispatch(buy_switch_action(2));
