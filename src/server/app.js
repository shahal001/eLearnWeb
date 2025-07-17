
import 'dotenv/config';

import express from 'express';
import { db } from './config/database.js';
import routes from './routes/appRoutes.js';

const app = express();
app.use(express.json());

db();

app.use('/api', routes)

app.get('/', (req, res) => {
  res.send('API is running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});