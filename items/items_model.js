const db = require('../dbconfig')

const getItems = () => {
    return db('items')
}

const getItemById = id => {
    return db('items').where({ id }).first()
}

const addItem = async item => {
    const [id] = await db('items').insert(item, 'id')

    return getItemById(id)
}

const deleteItem = id => {
    return db('items').where({ id }).delete()
}

const updateItem = async(item, id) => {
    await db('items').where({ id }).update(item)

    return getItemById(id)
}

module.exports = { getItems, getItemById, addItem, deleteItem, updateItem }