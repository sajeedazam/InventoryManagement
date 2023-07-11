var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  sku: { type: Number, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.auynv35.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

router.get('/', async function (req, res, next) {
  try {
    const items = await Item.find();
    res.send(items);
  } catch (error) {
    res.status(500).send({ message: 'Error retrieving items from the database' });
  }
});

router.post('/', async function (req, res, next) {
  try {
    const newItem = new Item(req.body);
    const savedItem = await newItem.save();
    res.send(savedItem);
  } catch (error) {
    res.status(400).send({ message: 'Failed to add item to the database' });
  }
});

router.delete('/:itemId', async function (req, res, next) {
  try {
    const itemId = req.params.itemId;
    const deletedItem = await Item.findByIdAndDelete(itemId);

    if (!deletedItem) {
      res.status(404).send({ message: 'Item not found' });
    } else {
      res.send(deletedItem);
    }
  } catch (error) {
    res.status(500).send({ message: 'Error deleting item from the database' });
  }
});

router.put('/:itemId', async function (req, res, next) {
  try {
    const itemId = req.params.itemId;
    const update = req.body;
    const updatedItem = await Item.findByIdAndUpdate(itemId, update, { new: true });

    if (!updatedItem) {
      res.status(404).send({ message: 'Item not found' });
    } else {
      res.send(updatedItem);
    }
  } catch (error) {
    res.status(500).send({ message: 'Error updating item in the database' });
  }
});

module.exports = router;
