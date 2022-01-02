import { ListTagsUseCase } from "../../domain/usecases/list-tags-usecase";
import { TagRepositoryImpl } from "../../infra/repositories/tag-repository";

export class ListTagsService implements ListTagsUseCase {
  constructor(private readonly tagRepository: TagRepositoryImpl) {}

  async list(): Promise<any> {

    const users = await this.tagRepository.listTags();

    return users;
  }
}  