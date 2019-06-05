import React, { Component } from 'react';
import * as Messages from '../constants/Messages';

const imageStyle = {
    width: '150px',
    height: '150px',
    backgroundSize: 'cover'
};

class CartItem extends Component {
    render() {
        var {cartItem} = this.props;
        return (
            <tr>
                <th scope="row">
                    <img src={cartItem.product.image} style={imageStyle}
                        alt={cartItem.product.name} className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.product.price}$</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onUpdateQuantity(cartItem.product.id, -1) }>
                            <a>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
                            onClick={ () => this.onUpdateQuantity(cartItem.product.id, 1) }>
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{cartItem.quantity * cartItem.product.price}$</td>
                <td>
                    <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item"
                        onClick={ () => this.onDeleteProductFromCart(cartItem.product.id) }>
                        X
                    </button>
                </td>
            </tr>
        );
    }

    onDeleteProductFromCart = (productId) => {
        this.props.onDeleteProductFromCart(productId);
        this.props.changeMessage(Messages.MSG_DELETE_PRODUCT_IN_CART_SUCCESS);
    }

    onUpdateQuantity = (productId, changedQuatity) => {
        this.props.onUpdateQuantity(productId, changedQuatity);
        this.props.changeMessage(Messages.MSG_UPDATE_CART_SUCCESS);
    }
}

export default CartItem;
