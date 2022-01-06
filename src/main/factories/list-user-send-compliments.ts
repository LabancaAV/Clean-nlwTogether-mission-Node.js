import { ListUserSendComplimentsService } from '../../data/services/list-user-send-compliments-service';
import { ComplimentRepositoryImpl } from '../../infra/repositories/compliment-repository';
import { ListUserSendComplimentsController } from '../../presentation/controllers/list-user-send-compliments';

export const listUserSendComplimentsController = () => {
  const complimentRepository = new ComplimentRepositoryImpl();
  const service = new ListUserSendComplimentsService(complimentRepository);
  return new ListUserSendComplimentsController(service);
};