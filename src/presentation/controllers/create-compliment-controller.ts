import { CreateComplimentUseCase } from '../../domain/usecases/create-compliment-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class CreateComplimentController implements Controller {
  constructor(private readonly createComplimentUseCase: CreateComplimentUseCase) {}

  async handle(request: any): Promise<HttpResponse<any>> {
    try {
        console.log(request);
      return successResponse(await this.createComplimentUseCase.createCompliment(request));
    } catch (error) {
      return errorResponse(error);
    }
  }
}