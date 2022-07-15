
import express from 'express';
import cors from 'cors';
import routes from './routes/routes';

const app = express();

const PORT = 3001;

const whiteList:string[] = ['http://192.168.18.13'];

app.use( cors({ origin: whiteList }) );

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