import { UserModel } from '../models/user-model'
import { CreateUserUseCase } from '../../domain/usecases/create-user-usecase'
import { UserRepositoryImpl } from '../../infra/repositories/user-repository'
import { UserMapper } from '../mappers/user-mapper';
import { UserAlreadyExistsError } from '../../domain/errors/user-error';

export class CreateUserService implements CreateUserUseCase {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async createUser(user: UserModel): Promise<any> {

    const userExists = await this.userRepository.findUserByEmail(user.email);

    if(userExists) throw new UserAlreadyExistsError();

    let userMapper = await UserMapper.toRepository(user);

    return this.userRepository.createUser(userMapper)
  }
}  