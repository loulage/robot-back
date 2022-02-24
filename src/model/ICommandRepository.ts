import { ICommandDTO } from "../dtos/ICommandDTO";

export default interface ICommandRepository {
  listAllCommands(): Promise<ICommandDTO[]>;
  getCommandById(id: number): Promise<ICommandDTO>
  listAllCommandsByRobotId(robotId: number): Promise<ICommandDTO[]>
  createCommand(userInput: string, robotId: number): Promise<ICommandDTO>
  updateCommandIsValid(id: number):  Promise<boolean>
  deleteCommand(id: number): Promise<boolean>
}