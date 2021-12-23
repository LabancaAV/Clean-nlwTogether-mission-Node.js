import { ListUsersUseCase } from '../../domain/usecases/list-users-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class ListUsersController implements Controller {
  constructor(private readonly listUsersUseCase: ListUsersUseCase) {}

  async handle(): Promise<HttpResponse<any>> {
    try {
      return successResponse(await this.listUsersUseCase.list());
    } catch (error) {
      return errorResponse(error);
    }
  }
}