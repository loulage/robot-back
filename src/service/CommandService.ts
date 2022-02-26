import { ICommandDTO } from '../dtos/ICommandDTO';
import {
  createCommand,
  deleteCommand,
  getCommandById,
  listAllCommands,
  listAllCommandsByRobotId,
  updateCommandIsValid,
} from '../model/CommandRepository';

export async function listAllCommandsService(): Promise<ICommandDTO[]> {
  const listAll = await listAllCommands();
  return listAll;
}

export async function listAllCommandsByRobotIdService(robotId: number): Promise<ICommandDTO[]> {
  const listAll = await listAllCommandsByRobotId(robotId);
  return listAll;
}

export async function getCommandByIdService(id: number): Promise<ICommandDTO> {
  const command = await getCommandById(id);
  return command;
}

export async function createCommandService(
  userInput: string,
  robotId: number,
  isValid: boolean,
): Promise<ICommandDTO> {
  const newCommand = await createCommand(userInput, robotId, isValid);
  return newCommand;
}

export async function updateCommandIsValidService(id: number): Promise<boolean> {
  const updatedCommand = await updateCommandIsValid(id);
  return updatedCommand;
}

export async function deleteCommandService(id: number): Promise<boolean> {
  const deletedCommand = await deleteCommand(id);
  return deletedCommand;
}
