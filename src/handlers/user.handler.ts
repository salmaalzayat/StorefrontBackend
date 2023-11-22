import express, { Request, Response } from 'express';
import { User, UserStore } from '../models/user.model';
import { auth } from '../middleware/auth';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const store = new UserStore();

const index = async (_req: Request, res: Response) => {
  try {
    const user = await store.index();
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const show = async (req: Request, res: Response) => {
  try {
    const user = await store.show(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(400);
    res.json(error);
  }
};

const create = async (req: Request, res: Response) => {
  const user: User = {
    id: parseInt(req.body.id),
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  };
  try {
    const newUser = await store.create(user);
    var token = jwt.sign(
      { user: newUser },
      process.env.TOKEN_SECRET as unknown as string
    );
    res.json(token);
  } catch (err) {
    res.status(400);
    res.json(err);
  }
};

const authenticate = async (req: Request, res: Response) => {
  const user: User = {
    id: 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    password: req.body.password,
  };
  try {
    const u = await store.authenticate(user.first_name, user.password);
    var token = jwt.sign(
      { user: u },
      process.env.TOKEN_SECRET as unknown as string
    );
    res.json(token);
  } catch (error) {
    res.status(401);
    res.json({ error });
  }
};

const users_routes = (app: express.Application) => {
  app.get('/users', auth, index);
  app.get('/users/login', authenticate);
  app.post('/users/signup', create);
  app.get('/users/:id', auth, show);
};

export default users_routes;
