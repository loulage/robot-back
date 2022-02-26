import { findRobotByIdService } from './RobotService';

const verifyMovement = (robotPosition:(string | number)[]) : boolean => {
  if ( robotPosition[0] < 0 || robotPosition[0] >= 5 || robotPosition[1] < 0 || robotPosition[1] >= 5){
    return false
  } else {
    return true
  }
};

export async function moveRobot(robotId: number, command: string) : Promise<(string | number)[] | boolean> {
  const directionWheel = ['N', 'E', 'S', 'W'];

  // M, L, R
  const robot = await findRobotByIdService(robotId);

  let robotX = +robot.current_position[0],
    robotY = +robot.current_position[1],
    robotDir = robot.current_position[2];

  let directionWheelIndex = directionWheel.indexOf(robotDir);
  const task = command.split('')
  task.every((e) => {
    switch (e) {
      case 'M':
        switch (robotDir) {
          case 'N':
            robotX += 0;
            robotY += 1;
            break;

          case 'E':
            robotX += 1;
            robotY += 0;
            break;

          case 'S':
            robotX += 0;
            robotY -= 1;
            break;

          case 'W':
            robotX -= 1;
            robotY += 0;
            break;
        }
        break;

      case 'R':
        directionWheelIndex = (directionWheelIndex + 1) % directionWheel.length
        robotDir = directionWheel[directionWheelIndex]
        break;

      case 'L':
        directionWheelIndex = directionWheelIndex - 1
        if (directionWheelIndex < 0 ) directionWheelIndex = directionWheelIndex + directionWheel.length
        robotDir = directionWheel[directionWheelIndex]
    }

    if (robotX < 0 || robotX >= 5 || robotY < 0 || robotY >= 5) return false
    else return true;
  });

  
  const robotNewPosition = [robotX, robotY, robotDir]
  const isRobotOk = verifyMovement(robotNewPosition)
  if (isRobotOk) {
    return robotNewPosition
  } else {
    return false
  }
}
