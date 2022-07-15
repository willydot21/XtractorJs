
import express from 'express';

import Xtractor from '../src/Xtractor-module';

const router = express.Router();

router.get('/', async (req, res) => {

  const { url } = req.query;

  if (typeof url === 'string') {

    const fembedItem = await Xtractor.extractFembed(decodeURIComponent(url));

    res.json(fembedItem).end();
  
  }

});

export default router;