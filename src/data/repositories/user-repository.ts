import { UserModel } from '../models/user-model';

export abstract class UserRepository {
  findUserByUUID: (id_user: string) => Promise<UserModel>;
  createUser: (user: any) => Promise<any>
}