const db = require('../dbconfig')


const getUsers = () => {
    return db('users').select('username')
}

const getUserById = id => {
    return db('users').where({ id }).first()
}

const addUser = async(user) => {
   const [id] = await db('users').insert(user)

   return getUserById(id)
}

const deleteUser = id => {
    return db('users').delete().where(id)
}

const updateUser = user => {
    return db('users').update(user).where(user.id)
}


module.exports = { getUsers, getUserById, addUser, deleteUser, updateUser }
