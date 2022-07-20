
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes/routes';
import axios from 'axios';

dotenv.config({
  path: __dirname+'.env'
})

const app = express();

const PORT = process.env.PORT || 3000;

app.use( cors(/* { origin: verifyOrigin }*/) );

app.use('/test', async (req, res) => {

  const vid = 'https://vd254.mycdn.me/expires/1658438324259/srcIp/185.154.199.141/srcAg/CHROME_ANDROID/ms/185.226.52.4/type/3/sig/tSsFQV_uIzI/ct/8/urls/185.226.53.5/clientType/1/zs/65/id/2856767130191/video'

  const r = await axios.get(vid);

  const json = r.data

  res.json({success:true, data:json});

});

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