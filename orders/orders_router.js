const router = require('express').Router()
const Order = require('./orders_model')

router.get('/users/:user_id', (req, res) => {
    const { id } = req.params

    Order.getUserOrders(id).then(orders => {
        res.status(200).json(orders)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem getting a list of orders."})
    })
})

router.get('/:order_id', (req, res) => {
    const { id } = req.params

    Order.getSpecificOrder(id).then(order => {
        res.status(200).json(order)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error getting your order information."})
    })
})

router.delete('/:order_id', (req, res) => {
    const { id } = req.params

    Order.cancelOrder(id).then(message => {
        res.status(200).json({"Message": "Order successfully cancelled."})
    })
})

module.exports = router