import { getManager } from 'typeorm';
import { UserRepository } from '../../data/repositories/user-repository';
import { PostgresUserEntity } from '../database/postgres/entities/user-entity';

export class UserRepositoryImpl implements UserRepository {
  async findUserByUUID(id_user: string): Promise<any> {
    try {
      const repository = getManager().getRepository(PostgresUserEntity);
      return await repository
        .createQueryBuilder('user')
        .select(
          `
          user.name
          `
        )
        .where('id_user = :id_user', { id_user })
        .getRawOne();
    } catch (error) {
      return;
    }
  }

  async findUserByEmail(email: string): Promise<any> {
    try {
      const repository = getManager().getRepository(PostgresUserEntity);
      return await repository
        .createQueryBuilder('user')
        .select(
          `
          user.name
          `
        )
        .where('email = :email', { email })
        .getRawOne();
    } catch (error) {
      return;
    }
  }

  async createUser(user_data: PostgresUserEntity): Promise<any> {
    try {
      console.log(user_data);
      
      const { id_user, name, email, admin, password  } = user_data;
      const repository = getManager().getRepository(PostgresUserEntity);
      return await repository.save({
        id_user, 
        name, 
        email, 
        admin, 
        password
      });
    } catch (error) {
      console.log(error);
      
      return false;
    }
  }

  async listUsers(): Promise<any>{
    try{
      const repository = getManager().getRepository(PostgresUserEntity);
      return await repository.find()
    } catch(error) {
      console.log(error);
      
      return false;
    }
  }
}