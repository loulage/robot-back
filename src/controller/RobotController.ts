import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { Robot } from "../entity/Robot";

export const getRobots = async (request: Request, response: Response) => {
    const robots = await getRepository(Robot).find()
    return response.json(robots)
}

export const saveRobot = async (request: Request, response: Response) => {
    const robot = await getRepository(Robot).save(request.body)
    response.json(robot);
}
