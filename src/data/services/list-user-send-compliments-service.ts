import { ListUserSendComplimentsUseCase } from "../../domain/usecases/list-user-send-compliments-usecase";
import { ComplimentRepositoryImpl } from "../../infra/repositories/compliment-repository";

export class ListUserSendComplimentsService implements ListUserSendComplimentsUseCase {
  constructor(private readonly complimentRepository: ComplimentRepositoryImpl) {}

  async list(id_user: string): Promise<any> {
    console.log('oi',id_user);
    
    const compliments = await this.complimentRepository.listUserSendCompliments(id_user);

    return compliments;
  }
}  