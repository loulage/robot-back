
import { Request, Response } from 'express';
import { createCommandService, listAllCommandsService } from '../service/CommandService';
import { httpStatus } from '../service/httpStatus';
import { moveRobot } from '../service/moveRobot';
import { findRobotByIdService, updateRobotPositionService } from '../service/RobotService';
import { verifyUserInput } from '../service/verifyUserInput';


export async function listAllCommands (_request: Request, response: Response): Promise<Response> {
  const commandList = await listAllCommandsService();
  if (commandList) {
    return response.status(httpStatus.OK).json(commandList);  
  }
  return response.status(httpStatus.INTERNAL_ERROR).json({ message: 'Internal Server Error' });
}

 export async function createCommand (request: Request, response: Response): Promise<Response> {
    const { userInput, robotId } = request.body
    
    const isUserInputAllowed = verifyUserInput(userInput)
    if (!isUserInputAllowed) {
      await createCommandService(userInput, robotId, isUserInputAllowed);
      return response.status(httpStatus.BAD_REQUEST).json({message: 'Invalid Syntax on user input!'})
    }

    if (isUserInputAllowed) {
      const robot = await moveRobot(robotId, userInput)
      console.log('dentro do controller, robo depois de mover', robot)
      if (robot) {
        await createCommandService(userInput, robotId, isUserInputAllowed)
        await updateRobotPositionService(robotId, {current_position: robot})
        const newRobotPosition = await findRobotByIdService(robotId)
        return response.status(httpStatus.CREATED).json(newRobotPosition); 
      }
      return response.status(httpStatus.UNPROCESSABLE_ENTITY).json({ message: 'Robot Would Fall! Re-do Operation' }); 
    }
  }

