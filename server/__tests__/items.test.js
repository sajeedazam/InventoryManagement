const request = require('supertest');
const app = require('../app');

describe('Items API', () => {
  // GET /items
  it('should retrieve all items', async () => {
    const res = await request(app).get('/items');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // POST /items
  it('should add a new item', async () => {
    const newItem = {
      name: 'New Item',
      sku: 12345,
      description: 'A new item',
      price: 19.99,
      imageUrl: 'www.test.com',
    };

    const res = await request(app).post('/items').send(newItem);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.name).toEqual(newItem.name);
  });

  // DELETE /items/:itemId
  it('should delete an existing item', async () => {
    const newItem = {
      name: 'Item to be deleted',
      sku: 98765,
      description: 'An item to be deleted',
      price: 29.99,
      imageUrl: 'www.test.com',
    };

    const postResponse = await request(app).post('/items').send(newItem);
    expect(postResponse.statusCode).toEqual(200);
    expect(postResponse.body).toHaveProperty('_id');

    const itemId = postResponse.body._id;

    // delete the item
    const deleteResponse = await request(app).delete(`/items/${itemId}`);
    expect(deleteResponse.statusCode).toEqual(200);
    expect(deleteResponse.body).toHaveProperty('_id', itemId);
  });
  
});
