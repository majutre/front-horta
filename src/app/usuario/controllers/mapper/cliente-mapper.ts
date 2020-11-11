import { Mapper } from './../../../app/base/mapper';
import { ClienteModel } from './../model/cliente-model';
import { ClienteEntity } from './../entity/cliente-entity';


export class ClienteMapper extends Mapper<ClienteEntity, ClienteModel> {

    mapFrom(entity: ClienteEntity): ClienteModel {
        return {
            id: entity.id,
            nome: entity.nome,
            sobrenome: entity.sobrenome,
            genero: entity.genero,
            email: entity.email,
            senha: entity.senha
        };
    }
    mapTo(param: ClienteModel): ClienteEntity {
        return {
            id: param.id,
            nome: param.nome,
            sobrenome: param.sobrenome,
            genero: param.genero,
            email: param.email,
            senha: param.senha
        };
    }
}