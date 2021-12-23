import { AuthenticateUserService } from '../../data/services/authenticate-user-service';
import { UserRepositoryImpl } from '../../infra/repositories/user-repository';
import { AuthenticateUserController } from '../../presentation/controllers/authenticate-user-controller';

export const authenticateUserController = () => {
  const userRepository = new UserRepositoryImpl();
  const service = new AuthenticateUserService(userRepository);
  return new AuthenticateUserController(service);
};