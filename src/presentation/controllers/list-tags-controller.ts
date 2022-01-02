import { ListTagsUseCase } from '../../domain/usecases/list-tags-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';

export class ListTagsController implements Controller {
  constructor(private readonly listTagsUseCase: ListTagsUseCase) {}

  async handle(): Promise<HttpResponse<any>> {
    try {
      return successResponse(await this.listTagsUseCase.list());
    } catch (error) {
      return errorResponse(error);
    }
  }
}