import { IRobotDTO } from '../dtos/IRobotDTO';
import {
  createRobotOnOrigin,
  deleteRobot,
  findRobotById,
  listAllRobots,
  updateRobotPosition,
} from '../model/RobotRepository';

export const listAllRobotsService = async () : Promise<IRobotDTO[]> => {
  const robotsList = await listAllRobots();
  return robotsList;
};

export const findRobotByIdService = async (id: number) : Promise<IRobotDTO> => {
  const robot = await findRobotById(id);
  return robot;
};

export const createRobotOnOriginService = async () : Promise<IRobotDTO> => {
  const newRobot = await createRobotOnOrigin();
  return newRobot;
};

export const updateRobotPositionService = async (id, newPosition) : Promise<boolean> => {
  const updatedRobot = await updateRobotPosition(id, newPosition);
  return updatedRobot;
};

export const deleteRobotService = async (id) : Promise<boolean> => {
  const deletedRobot = await deleteRobot(id);
  return deletedRobot;
};
