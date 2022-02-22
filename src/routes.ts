import { Router, Request, Response} from 'express'
import { createRobot, getRobots } from './controller/RobotController'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'hello world!'})
})

routes.get('/robot', getRobots);
routes.post('/robot', createRobot);
export default routes;
