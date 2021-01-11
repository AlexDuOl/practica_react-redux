import React, { Component } from 'react';
import { connect } from 'react-redux';

import { buy_halo_action, return_halo_action } from '../redux/actions/gameShopAction'

class ComprarJuego extends Component {
    render(){
        return (
            <div>
                <button className="ui secondary button" onClick={() => {
                    this.props.buy_halo_action(1);
                }}>Comprar</button>
                <br/>
                <button className="ui button" onClick={() => {
                    this.props.return_halo_action(1);
                }}>Devolver</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    buy_halo_action,
    return_halo_action
}

export default connect(null, mapDispatchToProps)(ComprarJuego);