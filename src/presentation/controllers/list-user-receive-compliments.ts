import { ListUserReceiveComplimentsUseCase } from '../../domain/usecases/list-user-receive-compliments-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class ListUserReceiveComplimentsController implements Controller {
  constructor(private readonly listUserReceiveComplimentsUseCase: ListUserReceiveComplimentsUseCase) {}

  async handle(request: any): Promise<HttpResponse<any>> {
    try {   
             
      return successResponse(await this.listUserReceiveComplimentsUseCase.list(request.id_user));
    } catch (error) {
      return errorResponse(error);
    }
  }
}