import express from "express";
import { routes } from "./src/routes/index.js";

// **Server Config**    

const server = express();
server.use(express.json());

server.use('/', routes);

server.listen(3000, () => console.log('Running'));