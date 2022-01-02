import { getManager } from 'typeorm';
import { TagRepository } from '../../data/repositories/tag-repository';
import { PostgresTagEntity } from '../database/postgres/entities/tag-entity';

export class TagRepositoryImpl implements TagRepository {
  async findTagByName(name: string): Promise<any> {
    try {
      const repository = getManager().getRepository(PostgresTagEntity);
      return await repository.findOne({name})
        
    } catch (error) {
      return;
    }
  }

  async createTag(data: PostgresTagEntity): Promise<any>{
    const repository = getManager().getRepository(PostgresTagEntity);
    const { id_tag, name } = data;
    return await repository.save({name: name, id_tag: id_tag})
  }

  async listTags(): Promise<any>{
    try{
        const repository = getManager().getRepository(PostgresTagEntity);
        return await repository.find()
      } catch(error) {
        console.log(error);
        
        return false;
      }
  }

  
}