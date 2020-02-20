const db = require('./dbconfig')


const getUsers = () => {
    return db('users')
}

const getUserById = id => {
    return db('users').where(id)
}

const addUser = user => {
    return db('users').insert(user)
}

const deleteUser = id => {
    return db('users').delete().where(id)
}

const updateUser = user => {
    return db('users').update(user).where(user.id)
}
