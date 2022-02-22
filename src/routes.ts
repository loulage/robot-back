import { Router, Request, Response} from 'express'
import { getRobots } from './controller/RobotController'

const routes = Router();

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'hello world!'})
})

routes.get('/robot', getRobots)

export default routes;
