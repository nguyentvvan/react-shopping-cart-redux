import React, { Component } from 'react';
import {connect} from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import PropTypes from 'prop-types';
import * as Messages from '../constants/Messages';
import * as Actions from '../actions/index';

class CartContainer extends Component {
    render() {
        const { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
            </Cart>
        );
    }

    showCartItem(cart) {
        var result = 
            <tr>
                <td>{Messages.MSG_CART_EMPTY}</td>
            </tr>;
        var total = 0;

        if(cart && cart.length > 0) {
            result = cart.map((cartItem, index) => {
                total = total + (cartItem.product.price * cartItem.quantity);
                return <CartItem key={index} cartItem={cartItem}
                            onDeleteProductFromCart={this.props.deleteProductFromCart}
                            changeMessage={this.props.changeMessage}
                            onUpdateQuantity={this.props.updateQuantity} />;
            });

            result.push(<CartResult total={total} key={cart.length} />);
        }

        return result;
    }
}

CartContainer.propTypes = {
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            product: PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                image: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                inventory: PropTypes.number.isRequired,
                rating: PropTypes.number.isRequired,
            }).isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    deleteProductFromCart: PropTypes.func.isRequired,
    changeMessage: PropTypes.func.isRequired,
    updateQuantity: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    };
}

const mapDispatchToProps = (dispatch, props) => {
    return{
        deleteProductFromCart: (productId) => {
            dispatch(Actions.actDeleteProductFromCart(productId));
        },
        changeMessage: (message) => {
            dispatch(Actions.actChangeMessage(message));
        },
        updateQuantity: (productId, changedQuantity) => {
            dispatch(Actions.actUpdateQuantity(productId, changedQuantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);