import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsRepository }  from "../repositories/settingsRepository";

class SettingsController {

    async create(request:Request, response:Response) {
        const settingsRepository = getCustomRepository(SettingsRepository);
        const { chate, username} = request.body;
        const settings = settingsRepository.create({
        chate,
        username
        })
    
        await settingsRepository.save(settings);
    
        return response.json(settings);
    } 
}

export { SettingsController}