import { CreateTagUseCase } from '../../domain/usecases/create-tag-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class CreateTagController implements Controller {
  constructor(private readonly createTagUseCase: CreateTagUseCase) {}

  async handle(request: any): Promise<HttpResponse<any>> {
    try {
      return successResponse(await this.createTagUseCase.createTag(request));
    } catch (error) {
      return errorResponse(error);
    }
  }
}