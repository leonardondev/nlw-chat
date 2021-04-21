import { Repository, EntityRepository } from "typeorm";
import { User } from "../entities/User";

/*
 *  Estategia para renomear e definir o tipo
 *  da classe generica Repository organizando todos
 *  os repositorios que serao usados no projeto
 */

@EntityRepository(User)
class UsersRepository extends Repository<User> {}

export { UsersRepository }
