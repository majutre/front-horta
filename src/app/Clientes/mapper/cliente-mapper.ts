import { ClienteModel } from './../model/cliente-model';
import { ClienteEntity } from './../entity/cliente-entity';
import { Mapper } from './../../../app/base/mapper';


export class ClienteMapper extends Mapper<ClienteEntity, ClienteModel> {

    mapFrom(entity: ClienteEntity): ClienteModel {
        return {
            id: entity.id,
            nome: entity.nome ? entity.nome : 'Não informado',
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