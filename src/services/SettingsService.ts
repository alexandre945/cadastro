import {getCustomRepository, Repository} from "typeorm";
import { SettingsRepository} from "../repositories/SettingsRepository";
import { Setting } from "../entities/Setting";



interface ISettingsCreate {
   chate: boolean;
   username: string; 
}


class SettingsService {
    private settingsRepository: Repository<Setting>
    constructor () {
        this.settingsRepository = getCustomRepository(SettingsRepository)
    }
 
    async create({ chate, username} : ISettingsCreate) {
        const settingsRepository = getCustomRepository(SettingsRepository);
        const settingsService = new SettingsService;
       const userAlreadyExists = await settingsRepository.findOne({
           username,
       });

       if (userAlreadyExists) {
           throw new Error("user already exists!"); 
       }

        const settings = settingsRepository.create({
        chate,
        username
        });
    
        await settingsRepository.save(settings);

        return settings;
    }
    async findByUsername(username: string) {
        const settingsRepository = getCustomRepository(SettingsRepository);
        const settings = await settingsRepository.findOne({
          username,
        });
        return settings;
      }
    async update(username: string, chate: boolean) {
        const settings = await this.settingsRepository.createQueryBuilder().
      update(Setting)
      .set({ chate})
      .where("username = :username", {
          username
      })
      .execute();
    }
}


export { SettingsService }