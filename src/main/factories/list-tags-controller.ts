import { ListTagsService } from '../../data/services/list-tags-service';
import { TagRepositoryImpl } from '../../infra/repositories/tag-repository';
import { ListTagsController } from '../../presentation/controllers/list-tags-controller';

export const listTagsController = () => {
  const tagRepository = new TagRepositoryImpl();
  const service = new ListTagsService(tagRepository);
  return new ListTagsController(service);
};