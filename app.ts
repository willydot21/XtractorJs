
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
import { verifyOrigin } from './src/app.utils';

dotenv.config({
  path: __dirname+'.env'
})

const app = express();

const PORT = process.env.PORT || 3000;

app.use( cors({ origin: verifyOrigin }) );

app.use('/fembed', routes.fembed);

app.get('/', (_req, res) => {

  res.json({
    apiRoutes: {
      fembed: {
        route: '/fembed',
        queryParams: true,
        urlParams: false
      }
    }
  }).end();

});

app.use((_req, res, _next) => {
  res.redirect('/');
})

app.listen( PORT, () => console.log(`Server running at ${PORT}!`) );