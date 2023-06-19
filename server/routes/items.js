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

module.exports = router;
