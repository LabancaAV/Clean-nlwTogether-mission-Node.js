import { UserRepositoryImpl } from '../../infra/repositories/user-repository'
import { ListUsersUseCase } from '../../domain/usecases/list-users-usecase';

export class ListUsersService implements ListUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async list(): Promise<any> {

    const users = await this.userRepository.listUsers();

    return users;
  }
}  