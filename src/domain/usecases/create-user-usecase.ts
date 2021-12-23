import { User } from '../entities/user';

export abstract class CreateUserUseCase {
  createUser: (user_data: User) => Promise<any>;
}