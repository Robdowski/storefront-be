const db = require('../dbconfig')


const getUsers = () => {
    return db('users').select('username', 'id')
}

const getUserById = id => {
    return db('users').where({ id }).first()
}

const addUser = async(user) => {
   const [id] = await db('users').insert(user, 'id')

   return getUserById(id)
}

const deleteUser = id => {
    return db('users').delete().where({ id })
}

const updateUser = async(user, id) => {
    await db('users').update(user).where({ id })
    
    return getUserById(id)
}


module.exports = { getUsers, getUserById, addUser, deleteUser, updateUser }
