import { UserModel } from '../models/user-model';

export abstract class TagRepository {
  findTagByName: (name: string) => Promise<UserModel>;
  createTag: (tag: any) => Promise<any>
}