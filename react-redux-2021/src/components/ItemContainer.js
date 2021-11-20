import React from 'react';
import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item (from item container) - {props.item}</h2>
            <button onClick={props.buyItem}>Buy Items</button>
        </div>
    )
}

// ownProps are the props passed into the component by the parent component
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {
        item: itemState
    }
}

// ownProps are the props passed into the component by the parent component
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    }

}

export default connect(mapStateToProps, mapDispatchToProps) (ItemContainer);
