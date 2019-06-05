import * as Types from '../constants/ActionTypes';

export const actAddProductToCart = (product, quantity) => {
    return {
        type: Types.ADD_PRODUCT_TO_CART,
        product: product,
        quantity: quantity
    }
}

export const actDeleteProductFromCart = (productId) => {
    return {
        type: Types.DELETE_PRODUCT_FROM_CART,
        productId: productId
    }
}

export const actUpdateQuantity = (productId, changedQuantity) => {
    return {
        type: Types.UPDATE_PRODUCT_QUANTITY_IN_CART,
        productId: productId,
        changedQuantity: changedQuantity
    }
}

export const actChangeMessage = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message: message
    }
}