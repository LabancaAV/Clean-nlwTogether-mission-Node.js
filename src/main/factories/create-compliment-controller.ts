import { CreateComplimentService } from "../../data/services/create-compliment-service";
import { ComplimentRepositoryImpl } from "../../infra/repositories/compliment-repository";
import { UserRepositoryImpl } from "../../infra/repositories/user-repository";
import { CreateComplimentController } from "../../presentation/controllers/create-compliment-controller";


export const createComplimentController = () => {
  const complimentRepository = new ComplimentRepositoryImpl();
  const userRepository = new UserRepositoryImpl();
  const service = new CreateComplimentService(complimentRepository, userRepository);
  return new CreateComplimentController(service);
};