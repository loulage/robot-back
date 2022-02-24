import { getRepository } from 'typeorm';
import { IRobotDTO } from '../dtos/IRobotDTO';
import { Robot } from '../entity/Robot';

export const listAllRobots = async (): Promise<IRobotDTO[]> => {
  try {
    const robotList = await getRepository(Robot).find();
    return robotList;
  } catch (err) {
    console.error(err.message);
  }
};

export const findRobotById = async (id: number) : Promise<IRobotDTO> => {
  try {
    const robot = await getRepository(Robot).findOne(id);
    return robot;
  } catch (err) {
    console.error(err.message);
  }
};

export const createRobotOnOrigin = async () : Promise<IRobotDTO> => {
  try {
    const originPosition = { current_position: ['0', '0', 'N'] };
    const newRobot =  await getRepository(Robot).save(originPosition);
    return newRobot;
  } catch (err) {
    console.error(err.message);
  }
};

export const updateRobotPosition = async (id: number, newPosition: object) : Promise<boolean> => {
  try {
    const robot = await getRepository(Robot).update(id, newPosition);
    if (robot.affected === 1) {
      return true;
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const deleteRobot = async (id: number): Promise<boolean> => {
  try {
    const robot = await getRepository(Robot).delete(id);
    if (robot.affected === 1) {
      return true;
    }
  } catch (err) {
    console.error(err.message);
  }
};
