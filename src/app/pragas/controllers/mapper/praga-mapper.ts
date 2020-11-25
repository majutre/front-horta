import { Mapper } from '../../../base/mapper';
import { PragaModel } from './../model/praga-model';
import { PragaEntity } from '../entity/praga-entity';


export class PragaMapper extends Mapper<PragaEntity, PragaModel> {

    mapFrom(entity: PragaEntity): PragaModel {
        return {
            id: entity.id,
            nome: entity.nomePopular,
            nomec: entity.nomeCientifico,
            descricao: entity.descricao,
            tratamento: entity.tratamento,
            tipo: entity.tipo,
            dano: entity.dano,
            controle: entity.controle,
            plantas: entity.plantas,
            foto: entity.foto
        };
    }
    mapTo(model: PragaModel): PragaEntity {
        return {
            id: model.id,
            nomePopular: model.nome,
            nomeCientifico: model.nomec,
            descricao: model.descricao,
            tratamento: model.tratamento,
            tipo: model.tipo,
            dano: model.dano,
            controle: model.controle,
            plantas: model.plantas,
            foto: model.foto
        };
    }
}

