const router = require('express').Router()
const Users = require('./user_model')


router.get('/', (req, res) => {
    return Users.getUsers().then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error retrieving a list of users."})
    })
})

module.exports = router