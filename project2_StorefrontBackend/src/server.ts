import express, { Request, Response } from 'express';
import products_routes from './handlers/product.handler';
import users_routes from './handlers/user.handler';
import orders_routes from './handlers/order.handler';
import dashboardRoutes from './handlers/dashboard.handler';
import bodyParser from 'body-parser';
import cors from 'cors';

const app: express.Application = express();
const address = 'http://localhost:3000';

//to whitelist forign domains you want to allow
const corsOptions = {
  origin: 'http://someotherdomain.com',
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
  res.send('<h1>Hello World!</h1>');
});

users_routes(app);
products_routes(app);
orders_routes(app);
dashboardRoutes(app);

app.listen(3000, function () {
  console.log(`starting app on: ${address}`);
});

export default app;
