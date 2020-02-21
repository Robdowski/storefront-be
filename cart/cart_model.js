const db = require('../dbconfig')

const getCartItems = user_id => {
   return db('user_cart_items').where('user_cart_items.user_id', user_id)
}

const getCartItemById = id => {
    return db('user_cart_items').where({ id }).first()
}

const addCartItem = async item => {
    await db('user_cart_items').insert(item)

    return getCartItems(item.user_id)
}

const removeCartItem = async id => {
    await db('user_cart_items').where({ id }).delete()

    return getCartItems(item.user_id)
}

const updateCartItem = async(item) => {
    const { id } = item

    await db('user_cart_items').where({ id }).update(item)

    return getCartItems(item.user_id)
}

module.exports = { getCartItems, getCartItemById, addCartItem, removeCartItem, updateCartItem }