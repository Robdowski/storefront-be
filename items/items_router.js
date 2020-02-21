const router = require('express').Router()
const Items = require('./items_model')


router.get('/', (req, res) => {
    Items.getItems().then(items =>{
        res.status(200).json(items)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem getting the items."})
    })
})

router.get('/:id', (req, res) =>{
    const { id } = req.params

    Items.getItemById(id).then(item => {
        res.status(200).json(item)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error retrieving item by id."})
    })
})

router.post('/', (req, res) => {
    const item = req.body

    Items.addItem(item).then(item => {
        res.status(201).json(item)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was a problem adding an item."})
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Items.deleteItem(id).then(deleted => {
        res.status(200).json({"Message": "The item has been successfully deleted."})
    })
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const item = req.body

    Items.updateItem(item, id).then(updated => {
        res.status(201).json(updated)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({"Error": "There was an error updating that item."})
    })
})