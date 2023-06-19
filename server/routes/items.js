var express = require('express');
var router = express.Router();
const { v4: uuid } = require('uuid');

var items = [
    { id: uuid(), name: 'Hammer', description: 'Steel head and wooden handle hammer', price: 15, imageUrl: "https://th.bing.com/th/id/R.08d4c4232ad5c3b152835810d8339de9?rik=wAKL6zkubUbHMg&pid=ImgRaw&r=0" },
    { id: uuid(), name: 'Pliers', description: 'For gripping objects', price: 15, imageUrl: 'https://cdn4.iconfinder.com/data/icons/construction-and-building-1/128/13-1024.png' },
];

/* GET items listing. */
router.get('/', function(req, res, next) {
  res.send(items);
});

// from cs455-express-demo
router.get('/:itemId', function (req, res, next) {
  const foundItem = items.find(item => item.id === req.params.itemId);
  
  if (!foundItem) return res.status(404).send({ message: 'Item not found' });

  return res.send(foundItem);
});

router.post('/', function (req, res, next) {
  if (!req.body.name || !req.body.description || !req.body.price || !req.body.imageUrl) {
    return res.status(400).send({ message: 'Fill all fields!' })
  }
 
  const item = { id: uuid(), name: req.body.name, description: req.body.description, price: req.body.price, imageUrl: req.body.imageUrl };
  items.push(item);
  return res.send(item);
});

router.delete('/:itemId', function (req, res, next) {
  const itemId = req.params.itemId;
  const deletedItem = items.find(item => item.id === itemId);

  if (!deletedItem) {
    return res.status(404).send({ message: 'Item not found' });
  }

  items = items.filter(item => item.id !== itemId);
  return res.send(deletedItem);
});

module.exports = router;
