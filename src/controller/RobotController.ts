import { Request, Response } from 'express';
import { httpStatus } from '../service/httpStatus';
import {
  createRobotOnOriginService,
  deleteRobotService,
  findRobotByIdService,
  listAllRobotsService,
  updateRobotPositionService,
} from '../service/RobotService';
import { createCommandService } from '../service/CommandService';

export const listRobots = async (_request: Request, response: Response) => {
  const robots = await listAllRobotsService();
  if (robots) {
    return response.status(httpStatus.OK).json(robots);
  }
  return response.status(httpStatus.INTERNAL_ERROR).json({ message: 'Internal Server Error' });
};

export const getRobotById = async (request: Request, response: Response) => {
  const { id } = request.params;
  const robot = await findRobotByIdService(+id);
  if (robot) {
    return response.status(httpStatus.OK).json(robot);
  }
  return response.status(httpStatus.NOT_FOUND).send({ message: 'Robot not found :/ ' });
};

export const createRobot = async (_request: Request, response: Response) => {
  const robot = await createRobotOnOriginService();
  if (robot) {
    return response.status(httpStatus.CREATED).json(robot);
  }
  return response.status(httpStatus.INTERNAL_ERROR).json({ message: 'Internal Server Error' });
};

export const updateRobotPositionToOrigin = async (request: Request, response: Response) => {
  const { robotId } = request.body;
  
  await createCommandService('ORIGIN', robotId, true)
  const updatedRobot = await updateRobotPositionService(robotId, { current_position: [0,0,'N'] });
  if (updatedRobot) {
    return response.status(httpStatus.OK).json(updatedRobot);
  }
  return response.status(httpStatus.NOT_FOUND).json({ message: 'Robot not found!' });
};

export const deleteRobot = async (request: Request, response: Response) => {
  const { id } = request.params;
  const robot = await deleteRobotService(+id);
  if (robot) {
    return response.status(httpStatus.OK).json({ message: 'Robot destroyed!' });
  }
  return response
    .status(httpStatus.NOT_FOUND)
    .json({ message: 'Robot not found, so not deleted.' });
};
