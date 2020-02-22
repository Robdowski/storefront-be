const db = require('../dbconfig')


const getUserOrders = user_id => {
    return db('user_order')
    .where('user_id', user_id)
}

const getSpecificOrder = order_id => {
    return db.select('items.*')
    .from('user_order')
    .leftJoin('user_order_item', 'user_order.id', 'user_order_item.order_id')
    .leftJoin('items', 'user_order_item.item_id', 'items.id')
    .where('user_order.id', '=', order_id)
}

const createOrder = async(items, user_id) => {
    const [id] = await db('user_order').insert({"user_id": user_id}, 'id')
    await items.forEach(item => {
        return db('user_order_item').insert(
            {
                'order_id': id,
                'item_id': item.id
            }
            )
    })
    return getSpecificOrder(id)
}

const cancelOrder = order_id => {
    return db('user_order').where('user_order.id', '=', order_id).delete()
}

module.exports = { getUserOrders, getSpecificOrder, cancelOrder, createOrder }