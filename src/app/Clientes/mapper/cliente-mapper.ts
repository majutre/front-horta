import { ClienteModel } from './../model/cliente-model';
import { ClienteEntity } from './../entity/cliente-entity';
import { Mapper } from './../../../app/base/mapper';


export class ClienteMapper extends Mapper<ClienteEntity, ClienteModel> {

    mapFrom(entity: ClienteEntity): ClienteModel {
        return {
            id: entity.id,
            nome: entity.nome ? entity.nome : 'Não informado',
            sobrenome: entity.sobrenome,
            dataNasc: entity.dataNasc,
            cpf: entity.cpf,
            rg: entity.rg,
            email: entity.email,
            endereco: entity.endereco
        };
    }
    mapTo(param: ClienteModel): ClienteEntity {
        return {
            id: param.id,
            nome: param.nome,
            sobrenome: param.sobrenome,
            dataNasc: param.dataNasc,
            cpf: param.cpf,
            rg: param.rg,
            email: param.email,
            endereco: param.endereco
        };
    }
}