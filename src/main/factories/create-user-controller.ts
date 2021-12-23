import { CreateUserService } from '../../data/services/create-user-service';
import { UserRepositoryImpl } from '../../infra/repositories/user-repository';
import { CreateUserController } from '../../presentation/controllers/create-user-controller';

export const createUserController = () => {
  const userRepository = new UserRepositoryImpl();
  const service = new CreateUserService(userRepository);
  return new CreateUserController(service);
};