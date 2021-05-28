export const addPizzaToCart = (pizzaObj) => ({
    type: 'ADD_PIZZA_CART',
    payload: pizzaObj
});

export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});

export const minusCart = (id) => ({
    type: 'MINUS_CART_ITEM',
    payload: id,
});

export const plusCart = (id) => ({
    type: 'PLUS_CART_ITEM',
    payload: id,
});



