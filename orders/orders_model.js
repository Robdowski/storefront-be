const db = require('../dbconfig')


const getUserOrders = user_id => {
    return db('user_order').where('user_order.user_id', { user_id })
}

const getSpecificOrder = order_id => {
    return db.select('*')
    .from('items')
    .join('user_order_items', 'user_order_items.item_id', 'items.id')
    .join('user_order', 'user_order_items.order_id', 'user_order.id')
    .where('user_order.id', { order_id })
}

const cancelOrder = order_id => {
    return db('user_order').where('user_order.id', { order_id }).delete()
}

module.exports = { getUserOrders, getSpecificOrder, cancelOrder }