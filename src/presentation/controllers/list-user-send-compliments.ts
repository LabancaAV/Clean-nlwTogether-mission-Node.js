import { ListUserSendComplimentsUseCase } from '../../domain/usecases/list-user-send-compliments-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class ListUserSendComplimentsController implements Controller {
  constructor(private readonly listUserSendComplimentsUseCase: ListUserSendComplimentsUseCase) {}

  async handle(request: any): Promise<HttpResponse<any>> {
    try {   
             
      return successResponse(await this.listUserSendComplimentsUseCase.list(request.id_user));
    } catch (error) {
      return errorResponse(error);
    }
  }
}