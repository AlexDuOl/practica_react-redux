import React, { Component } from 'react';
import { connect } from 'react-redux';

class CantidadJuego extends Component {
    render(){
        return (
            <React.Fragment>
                Unidades: {this.props.game_shop.halo}
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
}

export default connect(mapStateToProps)(CantidadJuego);