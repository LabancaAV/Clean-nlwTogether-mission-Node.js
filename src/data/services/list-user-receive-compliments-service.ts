import { ListUserReceiveComplimentsUseCase } from "../../domain/usecases/list-user-receive-compliments-usecase";
import { ComplimentRepositoryImpl } from "../../infra/repositories/compliment-repository";

export class ListUserReceiveComplimentsService implements ListUserReceiveComplimentsUseCase {
  constructor(private readonly complimentRepository: ComplimentRepositoryImpl) {}

  async list(id_user: string): Promise<any> {
    console.log('oi',id_user);
    
    const compliments = await this.complimentRepository.listUserReceiveCompliments(id_user);

    return compliments;
  }
}  