import * as express from 'express';
import * as _ from 'lodash';
import * as httpAssert from 'http-assert';
import { PosterController } from '../../controllers/PosterController';
import { Gallery } from '../../entity/Gallery';

export const pictureRouter = express.Router();

pictureRouter.get('/', async (req, res) => {
  const controller = new PosterController();
  const items = controller.list();
  res.send(items);
});

pictureRouter.get('/:id', async (req, res) => {
  const {id} = req.params;
  const controller = new PosterController();
  const item = controller.get(id);
  httpAssert(item, 404);
  res.send(item);
});

pictureRouter.post('/', async (req, res) => {
  const item: Gallery = req.body;
  const controller = new PosterController();
  controller.create(item);
  res.sendStatus(200);
});

pictureRouter.put('/', async (req, res) => {
  const item: Gallery = req.body;
  const controller = new PosterController();
  controller.update(item);
  res.sendStatus(200);
});

pictureRouter.delete('/:id', async (req, res) => {
  const {id} = req.params;
  const controller = new PosterController();
  controller.delete(id);
  res.sendStatus(200);
});

export default pictureRouter;