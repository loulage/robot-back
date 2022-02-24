import { Request, Response } from 'express';
import { httpStatus } from '../service/httpStatus';
import {
  createRobotOnOriginService,
  deleteRobotService,
  findRobotByIdService,
  listAllRobotsService,
  updateRobotPositionService,
} from '../service/RobotService';
import { moveRobot } from '../service/moveRobot';

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

export const updateRobotPosition = async (request: Request, response: Response) => {
  const { id } = request.params;
  // falta implementar a logica
  const updatedRobot = await updateRobotPositionService(id, { someData: [] });
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
