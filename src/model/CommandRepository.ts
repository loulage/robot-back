import { getRepository } from 'typeorm';
import { ICommandDTO } from '../dtos/ICommandDTO';
import { Command } from '../entity/Command';



export async function listAllCommands(): Promise<ICommandDTO[]> {
    try {
      const commandList = await getRepository(Command).find();
      return commandList;
    } catch (err) {
      console.error(err.message);
    }
  }

  export async function getCommandById(id: number): Promise<ICommandDTO> {
    try {
      const command = await getRepository(Command).findOne(id);
      return command;
    } catch (err) {
      console.error(err.message);
    }
  }

  export async function listAllCommandsByRobotId(robotId: number): Promise<ICommandDTO[]> {
    try {
      const commandList = await getRepository(Command).find({ where: { robotId: robotId } });
      return commandList;
    } catch (err) {
      console.error(err.message);
    } 
  }

  export async function createCommand(userInput: string, robotId: any, isValid: boolean): Promise<ICommandDTO> {
    try {
      const data = { command: userInput, is_valid: isValid, robot: robotId };
      const command = await getRepository(Command).save(data);
      return command;
    } catch (err) {
      console.error(err.message);
    }
  }

  export async function updateCommandIsValid(id: number): Promise<boolean> {
    try {
      const updateCommandStatus = await getRepository(Command).update(id, {is_valid: true})
      if (updateCommandStatus.affected === 1) {
        return true;
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  export async function deleteCommand(id: number): Promise<boolean> {
    try {
      const command = await getRepository(Command).delete(id);
      if (command.affected === 1) {
        return true;
      }
    } catch (err) {
      console.error(err.message);
    }
  }
