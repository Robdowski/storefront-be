const router = require('express').Router()
const Users = require('./user_model')
const bcrypt = require('bcryptjs')

// GET ALL USERS
router.get('/', (req, res) => {
    return Users.getUsers().then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error retrieving a list of users."})
    })
})

//GET USER BY ID
router.get('/:id', (req, res) => {
    const { id } = req.params
    return Users.getUserById(id).then(user => {
        res.status(200).json(user)
    })
})

//ADD USER
router.post('/', (req, res) => {
    const { username, password, email } = req.body

    bcrypt.hash(password, 10).then(hash => {
        password = hash
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem with saving your password. Please try again."})
    })

    Users.addUser({username, password, email}).then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem creating an account. Please try again."})
    })
})

// DELETE USER
router.delete('/:id', (req, res) => {
    const { id } = req.params
    Users.deleteUser(id).then(res => {
        res.status(200).json({"Message": "Your account has been deleted. Thank you."})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem deleting your account. Please try again."})
    })
})

//UPDATE USER
router.put('/:id', (req, res) => {
    const user = req.body
    Users.updateUser(user).then(user => {
        res.status(201).json(user)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem updating your user information."})
    })
})

module.exports = router