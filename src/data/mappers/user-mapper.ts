import { UserModel } from '../models/user-model';
import { v4 as uuid } from "uuid";

export class UserMapper {
  static async toRepository(data: UserModel): Promise<any> {
    return {
      id_user: uuid(),
      name: data?.name,
      email: data?.email,
      password: data?.password,
      admin: data?.admin,
    };
  }
}