const router = require('express').Router()
const Cart = require('./cart_model')

router.get('/:user_id', (req, res) => {

    const { user_id } = req.params

    Cart.getCartItems(user_id).then(cart => {
        res.status(200).json(cart)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem getting your cart."})
    })
})

router.get('/item/:item_id', (req, res) => {

    const { item_id } = req.params

    Cart.getCartItemById(item_id).then(item => {
        res.status(200).json(item)
    })
    .catch(err=> {
        console.log(err)
        res.status(500).json({"Error": "There was a problem getting the item by id."})
    })
})

router.post('/', (req, res) => {

    const item = req.body

    Cart.addCartItem(item).then(cart => {
        res.status(201).json(cart)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error adding item to cart."})
    })
})

router.delete('/:id', (req, res) => {

    const { id } = req.params

    Cart.removeCartItem(id).then(deleted => {
        res.status(200).json(deleted)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem deleting the item from the cart."})
    })
})

router.put('/:id', (req, res) => {
    const item = req.body

    Cart.updateCartItem(item).then(cart => {
        res.status(201).json(cart)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem updating the item in your cart."})
    })
})

module.exports = router