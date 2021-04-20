import { Repository, EntityRepository } from "typeorm";
import { Setting } from "../entities/Setting";

/*
 *  Estategia para renomear e definir o tipo
 *  da classe generica Repository organizando todos
 *  os repositorios que serao usados no projeto
 */

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting> {}

export { SettingsRepository }
