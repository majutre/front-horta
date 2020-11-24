import { Mapper } from '../../../base/mapper';
import { PlantaModel } from './../model/planta-model';
import { PlantaEntity } from '../entity/planta-entity';


export class PlantaMapper extends Mapper<PlantaEntity, PlantaModel> {

    mapFrom(entity: PlantaEntity): PlantaModel {
        return {
            id: entity.id,
            nome: entity.nomepo,
            nomec: entity.nomeci,
            descricao: entity.descricao,
            luz: entity.luz,
            temperatura: entity.temperatura,
            epoca: entity.epoca,
            tempo: entity.tempo,
            solo: entity.solo,
            irrigacao: entity.irrigacao,
            pragas: entity.pragas,
            foto: entity.foto
        };
    }
    mapTo(model: PlantaModel): PlantaEntity {
        return {
            id: model.id,
            nomepo: model.nome,
            nomeci: model.nomec,
            descricao: model.descricao,
            luz: model.luz,
            temperatura: model.temperatura,
            epoca: model.epoca,
            tempo: model.tempo,
            solo: model.solo,
            irrigacao: model.irrigacao,
            pragas: model.pragas,
            foto: model.foto
        };
    }
}

