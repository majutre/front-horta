import { Mapper } from '../../../base/mapper';
import { PlantaModel } from './../model/planta-model';
import { PlantaEntity } from '../entity/planta-entity';


export class PlantaMapper extends Mapper<PlantaEntity, PlantaModel> {

    mapFrom(entity: PlantaEntity): PlantaModel {
        return {
            id: entity.id,
            nomeci: entity.nomeci,
            nomepo: entity.nomepo,
            descricao: entity.descricao,
            tipo: entity.tipo,
            luz: entity.luz,
            temperatura: entity.temperatura,
            epoca: entity.epoca,
            tempo: entity.tempo,
            solo: entity.solo,
            irrigacao: entity.irrigacao,
            pestes: entity.pestes,
            propagacao: entity.propagacao,
            imagem: entity.imagem
        };
    }
    mapTo(param: PlantaModel): PlantaEntity {
        return {
            id: param.id,
            nomeci: param.nomeci,
            nomepo: param.nomepo,
            descricao: param.descricao,
            tipo: param.tipo,
            luz: param.luz,
            temperatura: param.temperatura,
            epoca: param.epoca,
            tempo: param.tempo,
            solo: param.solo,
            irrigacao: param.irrigacao,
            pestes: param.pestes,
            propagacao: param.propagacao,
            imagem: param.imagem
        };
    }
}

