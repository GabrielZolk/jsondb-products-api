import express from "express";
import Controller from '../controllers/index.js';

const controller = new Controller();

const route = express();

route.get('/products', controller.getAll);
route.get('/products/:index', controller.getByIndex);
route.post('/products', controller.postInto);
route.put('/products/:index', controller.update);
route.delete('/products/:index', controller.delete);

export const routes = route;