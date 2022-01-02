import { CreateTagService } from '../../data/services/create-tag-service';
import { TagRepositoryImpl } from '../../infra/repositories/tag-repository';
import { CreateTagController } from '../../presentation/controllers/create-tag-controller';

export const createTagController = () => {
  const tagRepository = new TagRepositoryImpl();
  const service = new CreateTagService(tagRepository);
  return new CreateTagController(service);
};