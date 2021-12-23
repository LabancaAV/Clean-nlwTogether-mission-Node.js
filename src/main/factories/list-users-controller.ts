import { ListUsersService } from '../../data/services/list-users-service';
import { UserRepositoryImpl } from '../../infra/repositories/user-repository';
import { ListUsersController } from '../../presentation/controllers/list-users-controller';

export const listUsersController = () => {
  const userRepository = new UserRepositoryImpl();
  const service = new ListUsersService(userRepository);
  return new ListUsersController(service);
};