import express from 'express';
import env from 'dotenv';
import goalRoutes from './routes/goalRoutes.js';
import errorHandler from './middleware/errorHandler.js';

env.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at ${PORT}`));
