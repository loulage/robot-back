import { Router, Request, Response } from 'express';
import { createCommand, listAllCommands } from './controller/CommandController';

import {
  createRobot,
  deleteRobot,
  getRobotById,
  listRobots,
  updateRobotPosition,
} from './controller/RobotController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world!' });
});

// Robot Routes
routes.get('/robot', listRobots);
routes.get('/robot/:id', getRobotById);
routes.post('/robot', createRobot);
routes.patch('/robot/:id', updateRobotPosition);
routes.delete('/robot/:id', deleteRobot);

// Commands Routes
routes.get('/command', listAllCommands)
routes.post('/command', createCommand)
export default routes;
