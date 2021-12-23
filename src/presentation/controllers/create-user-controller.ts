import { CreateUserUseCase } from '../../domain/usecases/create-user-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class CreateUserController implements Controller {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(request: any): Promise<HttpResponse<any>> {
    try {
      return successResponse(await this.createUserUseCase.createUser(request));
    } catch (error) {
      return errorResponse(error);
    }
  }
}