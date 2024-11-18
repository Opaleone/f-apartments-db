import express from 'express';
import dotenv from 'dotenv';
import db from './db/connection';
import routes from './src/routes';
dotenv.config();

const PORT = process.env.PORT;

const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Server running on url http://localhost:${PORT}`);
  })
})