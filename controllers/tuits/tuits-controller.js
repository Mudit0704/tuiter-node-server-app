import * as tuitsDao from './tuits-dao.js'

const createTuit = async (req, res) => {
  const newTuit = req.body;
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.dislikes = 0;
  newTuit.disliked = false;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  newTuit.time = "Now";
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  res.json(insertedTuit);
}

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits()
  res.json(tuits);
}
const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updates = req.body;
  await tuitsDao.updateTuit(tuitdIdToUpdate, updates);
  res.sendStatus(200);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(200);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}