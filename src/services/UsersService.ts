import { getCustomRepository } from "typeorm";

import { UsersRepository } from "../repositories/UsersRepository";


class UsersService {

  private usersRepository: UsersRepository;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async create(email: string) {
    const userExixts = await this.usersRepository.findOne({email});

    if (userExixts) {
      return userExixts;
    }

    const user = this.usersRepository.create({
      email,
    })

    await this.usersRepository.save(user)

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.usersRepository.findOne({ email });

    return user;
  }

  async findUserByID(id: string) {
    const user = await this.usersRepository.findOne({ id });

    return user;
  }

}

export { UsersService }
