import { MessageRepository } from "../repositories/MessgeRepository";
import { getCustomRepository } from "typeorm"; 
interface IMessageCreate {
   admin_id?: string;
   text: string;
   user_id: string; 
}

class MessagesService {
 
    async create({ admin_id, text, user_id}: IMessageCreate) {
        const messagesRepository = getCustomRepository(MessageRepository);
         
       const message = messagesRepository.create({
            admin_id,
            text,
            user_id,
        });
        await messagesRepository.save(message);

        return message;
    }
  

async listByUser(user_id:string) {
    const messagesRepository = getCustomRepository(MessageRepository);

    const list = await messagesRepository.find({
    where:{user_id},
    relations: ["user"],
    });

    return list;
}

}

export { MessagesService };