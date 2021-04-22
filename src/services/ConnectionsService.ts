import { getCustomRepository } from "typeorm";

import { ConnectionsRepository } from "../repositories/ConnectionsRepository";

interface IConnectionCreate {
  id?: string;
  user_id: string;
  admin_id?: string;
  socket_id: string;
}

class ConnectionsService {
  private connectionsRepository: ConnectionsRepository;

  constructor() {
    this.connectionsRepository = getCustomRepository(ConnectionsRepository);
  }

  async create({ socket_id, user_id, admin_id, id }: IConnectionCreate) {
    const connection = this.connectionsRepository.create({
      socket_id,
      user_id,
      admin_id,
      id,
    });

    await this.connectionsRepository.save(connection)

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = this.connectionsRepository.findOne({user_id});

    return connection;
  }

}

export { ConnectionsService }
