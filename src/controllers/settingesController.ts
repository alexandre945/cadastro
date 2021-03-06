import { Request, Response } from "express";
import { SettingsService } from "../services/SettingsService";

class SettingsController {
    async create(request: Request, response: Response) {
        const { chate, username } = request.body;

        const settingsService = new SettingsService();

        try {
            const settings = await settingsService.create({ chate, username });

            return response.json(settings);
        } catch (err) {
            return response.status(400).json({
                message: err.message,
            });
        }
    }
    async update(request: Request, response: Response) {
        const { username } = request.params;
        const { chate } = request.body;

        const settingsService = new SettingsService();

        const settings = await settingsService.update(username, chate);

        return response.json(settings);
    }


}

export { SettingsController };