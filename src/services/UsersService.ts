import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";



class UsersService {
  static findByEmail(email: any) {
      throw new Error("Method not implemented.");
     
  }
  async create(email:string) {
    const usersRepository = getCustomRepository(UsersRepository);
    

    const userExists = await usersRepository.findOne({
        email,
    })

    if(userExists) {
        return userExists;
    }
    const user = usersRepository.create({
        email
    });
    await usersRepository.save(user);

    return user;
  }
  async findByEmail(email: string) {
    const usersRepository = getCustomRepository(UsersRepository);
    const user = await usersRepository.findOne({ email });
  
    return user;
  }
}

export { UsersService };