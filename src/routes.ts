import { request, Router} from "express";
import { SettingsController } from "./controllers/settingesController";



const routes = Router();

const settingsController = new SettingsController();

routes.post("/settings", settingsController.create);


export { routes};