import express from 'express';
import UserRoute from './routes/UserRoute.js';

const app = express();
app.set('view engine', 'ejs');

app.use(express.json());
app.use(UserRoute);

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(5000, () => console.log('Server is running'));
