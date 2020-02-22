const db = require('../dbconfig')

const getCartItems = user_id => {
   return db.select('*', 'user_cart_items.id').from('items').leftJoin('user_cart_items', 'items.id', 'user_cart_items.item_id').leftJoin('users', 'user_cart_items.user_id', 'users.id').where('users.id', user_id)
}

const getCartItemById = id => {
    return db('user_cart_items').where({ id }).first()
}

const addCartItem = async item => {
    await db('user_cart_items').insert(item)

    return getCartItems(item.user_id)
}

const removeCartItem = async id => {
    const item = await getCartItemById(id)

    await db('user_cart_items').where({ id }).delete()

    return getCartItems(item.user_id)
}

const updateCartItem = async(item) => {
    const { id } = item

    if (item.quantity === 0){ // If quantity is 0, delete item instead of updating.
        await removeCartItem(item.id)
    } else {
        await db('user_cart_items').where({ id }).update(item)
    }

   

    return getCartItems(item.user_id)
}

module.exports = { getCartItems, getCartItemById, addCartItem, removeCartItem, updateCartItem }