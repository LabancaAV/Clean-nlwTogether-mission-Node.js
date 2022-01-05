import { ListUserReceiveComplimentsService } from '../../data/services/list-user-receive-compliments-service';
import { ComplimentRepositoryImpl } from '../../infra/repositories/compliment-repository';
import { ListUserReceiveComplimentsController } from '../../presentation/controllers/list-user-receive-compliments';

export const listUserReceiveComplimentsController = () => {
  const complimentRepository = new ComplimentRepositoryImpl();
  const service = new ListUserReceiveComplimentsService(complimentRepository);
  return new ListUserReceiveComplimentsController(service);
};