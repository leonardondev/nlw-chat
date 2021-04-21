import { Repository, EntityRepository } from "typeorm";
import { Message } from "../entities/Message";

/*
 *  Estategia para renomear e definir o tipo
 *  da classe generica Repository organizando todos
 *  os repositorios que serao usados no projeto
 */

@EntityRepository(Message)
class MessagesRepository extends Repository<Message> {}

export { MessagesRepository }
