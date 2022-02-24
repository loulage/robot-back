import { Robot } from "../entity/Robot";

export interface ICommandDTO {
  id: number,
  command: string,
  is_valid?: boolean,
  created_at: Date,
  robot: Robot,
}