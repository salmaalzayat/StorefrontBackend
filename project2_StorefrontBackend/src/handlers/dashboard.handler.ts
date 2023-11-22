import express, { Request, Response } from 'express';
import { auth } from '../middleware/auth';
import { DashboardQueries } from '../services/dashboard';

const dashboard = new DashboardQueries();

const productsInOrders = async (_req: Request, res: Response) => {
  try {
    const products = await dashboard.productsInOrders(_req.params.user_id);
    res.json(products);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const getTop5Orders = async (req: Request, res: Response) => {
  try {
    const products = await dashboard.top5Products();
    res.json(products);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const productsInSpecificOrder = async (_req: Request, res: Response) => {
  try {
    const products = await dashboard.productsInSpecificOrder(
      _req.params.user_id,
      _req.params.order_id
    );
    res.json(products);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const addProduct = async (_req: Request, res: Response) => {
  const orderId: string = _req.params.order_id;
  const productId: string = _req.body.product_id;
  const quantity: number = parseInt(_req.body.quantity);

  try {
    const addedProduct = await dashboard.addProduct(
      quantity,
      orderId,
      productId
    );
    res.json(addedProduct);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const dashboardRoutes = (app: express.Application) => {
  app.get('/users/:user_id/orders/:order_id', auth, productsInSpecificOrder);
  app.get('/users/:user_id/orders', auth, productsInOrders);
  app.post('/users/:user_id/orders/:order_id/products', auth, addProduct);
  app.get('/top5products', getTop5Orders);
};

export default dashboardRoutes;
