import { Repository, EntityRepository } from "typeorm";
import { Connection } from "../entities/Connection";

/*
 *  Estategia para renomear e definir o tipo
 *  da classe generica Repository organizando todos
 *  os repositorios que serao usados no projeto
 */

@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection> {}

export { ConnectionsRepository }
