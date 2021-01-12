import './App.css';
import halo from './img/halo.jpg';
//import CantidadJuego from './components/CantidadJuego';
//import ComprarJuego from './components/CompraJuego';

import CantidadJuegoHook from './components/CantidadJuego.hook';
import ComprarJuegoHook from './components/CompraJuego.hook';

import store from './redux/store';
import { Provider } from 'react-redux';
import BuscadorPokemon from './components/buscador/BuscadorPokemon';
import ResultadoPokemon from './components/buscador/ResultadoPokemon';

function App() {
  return (
    <Provider store={store}>
      <div className="App ui vertically divided grid">
        <div className="three column row">
          <div className="column">
            <div className="ui card">
              <div className="image">
                <img src={halo} alt="Juego Halo" />
              </div>
              <div className="content">
                <div className="header">
                  <CantidadJuegoHook />
                </div>
                <br/>
                <div className="meta">
                  <ComprarJuegoHook />
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui container">
              <BuscadorPokemon />
            </div>
          </div>
          <div className="column">
            <div className="ui container">
              <ResultadoPokemon />
            </div>
          </div>
        </div>
      </div>
    </Provider>
  );
}

export default App;


