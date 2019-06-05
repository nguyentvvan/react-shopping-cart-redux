import * as Types from '../constants/ActionTypes';

const data = JSON.parse(localStorage.getItem('CART'));

const initialState = data ? data : [];

const findProductInCart = (cart, productId) => {
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product.id === productId) {
            return i;
        }
    }

    return -1;
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_PRODUCT_TO_CART:
            var index = findProductInCart(state, action.product.id);

            if (index === -1) { // khong tim thay trong cart
                state.push({product: action.product, quantity: 1});
            } else { // product da co trong cart
                state[index].quantity = state[index].quantity + 1;
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        case Types.DELETE_PRODUCT_FROM_CART:
            var index = findProductInCart(state, action.productId);

            if (index !== -1) {
                state.splice(index, 1);
            }
            // localStorage.setItem('CART', JSON.stringify(state));
            localStorage.removeItem('CART');
            
            return [...state];
        case Types.UPDATE_PRODUCT_QUANTITY_IN_CART:
            var index = findProductInCart(state, action.productId);

            if (index !== -1) {
                state[index].quantity = state[index].quantity + action.changedQuantity;
                if (state[index].quantity === 0) {
                    state.splice(index, 1);
                }
            }
            localStorage.setItem('CART', JSON.stringify(state));

            return [...state];
        default:
            return [...state];
    }
}

export default cart;