import express from 'express';
import path from 'path';
import posts from './router/posts.js'
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFound from './middleware/notFound.js';
import { fileURLToPath } from 'url';
const port = process.env.PORT
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use(logger)
app.use(express.static(path.join(__dirname, 'public')))
app.use('/api/posts', posts)

app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`server is running on port ${port}`));