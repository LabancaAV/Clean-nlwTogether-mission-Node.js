import { getManager } from 'typeorm';
import { ComplimentRepository } from '../../data/repositories/compliment-repository';
import { PostgresComplimentEntity } from '../database/postgres/entities/compliment-entity';

export class ComplimentRepositoryImpl implements ComplimentRepository {

  async createCompliment(data: PostgresComplimentEntity): Promise<any>{
    const repository = getManager().getRepository(PostgresComplimentEntity);
    const { tag_id, user_sender, user_receiver, message, id } = data;
    return await repository.save({
        id: id,
        tag_id: tag_id, 
        user_sender: user_sender, 
        user_receiver: user_receiver, 
        message: message
    })
  }  
}