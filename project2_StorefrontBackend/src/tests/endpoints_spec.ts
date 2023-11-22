import supertest from 'supertest';
import app from '../server';
import { deleteTable } from '../services/dashboard';

const request = supertest(app);

describe('Test endpoint responses', () => {
  it('root endpoint', async () => {
    request.get('/').expect(200);
  });

  it('user create endpoint', async () => {
    const result = await request.post('/users/signup').send({
      first_name: 'salma',
      last_name: 'alzayat',
      password: '444',
    });
    expect(result.status).toBe(200);
  });

  it('product index endpoint', async () => {
    request.get('/products').expect(200);
  });

  it('products by category endpoint', async () => {
    const result = await request.get('/products/category/cake');
    expect(result.status).toBe(200);
  });

  it('products show endpoint', async () => {
    const result = await request.get('/products/1');
    expect(result.status).toBe(200);
    await deleteTable('product_order');
    await deleteTable('orders');
    await deleteTable('users');
    await deleteTable('products');
  });

  it('products top 5 popular show endpoint', async () => {
    const response = await request.get('/top5products');
    expect(response.status).toBe(200);

    await deleteTable('product_order');
    await deleteTable('orders');
    await deleteTable('users');
    await deleteTable('products');
  });
});
