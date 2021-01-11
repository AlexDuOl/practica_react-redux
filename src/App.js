import './App.css';
import halo from './img/halo.jpg';
//import CantidadJuego from './components/CantidadJuego';
//import ComprarJuego from './components/CompraJuego';

import CantidadJuegoHook from './components/CantidadJuego.hook';
import ComprarJuegoHook from './components/CompraJuego.hook';

import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <div className="App ui row grid">
        <div className="ui card six wide column img-card">
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
    </Provider>
  );
}

export default App;
