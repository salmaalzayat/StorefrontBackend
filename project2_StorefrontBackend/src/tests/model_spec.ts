import { Product, ProductStore } from '../models/product.model';
import { User, UserStore } from '../models/user.model';
import { Order, OrderStore } from '../models/order.model';

import dotenv from 'dotenv';

dotenv.config();

const userStore = new UserStore();
const productStore = new ProductStore();
const orderStore = new OrderStore();

const userTest: User = {
  id: 1,
  first_name: 'salma',
  last_name: 'alzayat',
  password: '444',
};
const prodTest: Product = {
  id: 1,
  name: 'cheesecake',
  price: 300,
  category: 'cake',
};
const orderTest: Order = {
  id: 1,
  user_id: 1,
  statusoforder: 'active',
};

describe('ALL Models', () => {
  beforeAll(function () {
    console.log('start models tests');
  });
  afterAll(function () {
    console.log('end models tests');
  });
  it('User should have an index method', () => {
    expect(userStore.index).toBeDefined();
  });

  it('User should have a show method', () => {
    expect(userStore.show).toBeDefined();
  });

  it('User should have a create method', () => {
    expect(userStore.create).toBeDefined();
  });

  it('create method should return a user with id=1 name=salma alzayat password=444', async () => {
    const result = await userStore.create(userTest);
    expect({
      id: result.id,
      first_name: result.first_name,
      last_name: result.last_name,
    }).toEqual({
      id: userTest.id,
      first_name: userTest.first_name,
      last_name: userTest.last_name,
    });
  });

  it('product should have an index method', () => {
    expect(productStore.index).toBeDefined();
  });

  it('product should have a create method', () => {
    expect(productStore.create).toBeDefined();
  });

  it('product should have a show method', () => {
    expect(productStore.show).toBeDefined();
  });

  it('index method should return a list of products', async () => {
    const result = await productStore.index();
    expect(result).toEqual([]);
  });

  it('order should have an index method', () => {
    expect(orderStore.index).toBeDefined();
  });

  it('order should have a create method', () => {
    expect(orderStore.create).toBeDefined();
  });

  it('order should have a show method', () => {
    expect(orderStore.show).toBeDefined();
  });

  it('index method should return a list of orders', async () => {
    const result = await orderStore.index();
    expect(result).toEqual([]);
  });
});
