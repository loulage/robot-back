import { Router, Request, Response } from 'express';
import { createCommand, listAllCommands } from './controller/CommandController';

import {
  createRobot,
  deleteRobot,
  getRobotById,
  listRobots,
  updateRobotPositionToOrigin,
} from './controller/RobotController';

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
  return response.json({ message: 'hello world!' });
});

routes.get('/robot', listRobots);
routes.get('/robot/:id', getRobotById);
routes.post('/robot', createRobot);
routes.patch('/robot/reset', updateRobotPositionToOrigin);
routes.delete('/robot/:id', deleteRobot);

routes.get('/command', listAllCommands)
routes.post('/command', createCommand)
export default routes;

/**
 * @swagger
 * components:
 *  schemas:
 *    Robot:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: auto generated ID of robots
 *        current_position:
 *          type: array
 *          description: array of string
 *        created_at:
 *          type: string
 *        updated_at:
 *          type: string
 *      example:
 *        id: 1
 *        current_position: ['1', '3', 'N']
 *        created_at: 2022-02-25T20:40:02.551Z
 *        updated_at: 2022-02-25T21:00:59.068Z
 */

/**
 * @swagger
 * tags:
 *  name: Robot
 *  description: The robots managing API
 */

/**
 * @swagger
 * tags:
 *  name: Command
 *  description: The commands managing API
 */

/**
 * @swagger
 * /robot:
 *  get:
 *    tags: [Robot]
 *    summary: Use to request a list of all robots
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *         description: Something went wrong within server
 */

/**
 * @swagger
 * /robot/{id}:
 *  get:
 *    tags: [Robot]
 *    summary: Use to request a specific robot
 *    responses:
 *      '200':
 *        description: A successful response
 *      '404':
 *         description: No robot Found
 */     

/**
 * @swagger
 * /robot/:
 *  post:
 *    tags: [Robot]
 *    summary: Use to request a creation of a new robot
 *    requestBody:
 *      content:
 *        application/json:
 *          schema:
 *          $ref: '#/components/schemas/Robot'
 *    responses:
 *      '201':
 *        description: Successfully created a robot response (return a robot)
 *      '404':
 *         description: robot not found.
 */

/**
 * @swagger
 * /robot/reset:
 *  patch:
 *    tags: [Robot]
 *    summary: Use to request to reset a position of robot
 *    responses:
 *      '200':
 *        description: Successfully reset robot current_position to ['0','0','N']
 *        
 *      '404':
 *         description: robot not found.
 */

/**
 * @swagger
 * /robot/{id}:
 *  delete:
 *    tags: [Robot]
 *    summary: Use to request a deletion of a robot
 *    responses:
 *      '200':
 *        description: Successfully deleted a robot
 *      '404':
 *         description: robot not found.
 */


// Commands Routes
/**
 * @swagger
 * /command:
 *  get:
 *    tags: [Command]
 *    summary: Use to request a list of all commands
 *    responses:
 *      '200':
 *        description: A successful response
 *      '500':
 *         description: Something went wrong within server
 */

/**
 * @swagger
 * /command:
 *  post:
 *    tags: [Command]
 *    summary: Use to create a command that may move the robot.
 *    responses:
 *      '200':
 *        description: A successful response. Means that robot in application has moved successfully.
 *      '401':
 *         description: Command created but request didn't operate robot.
 *      '500':
 *         description: Something went wrong within server
 */