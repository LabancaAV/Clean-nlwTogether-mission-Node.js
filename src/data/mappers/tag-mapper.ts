import { v4 as uuid } from "uuid";
import { TagModel } from "../models/tag-model";

export class TagMapper {
  static async toRepository(tag_data: TagModel): Promise<any> {
    return {
      id_tag: uuid(),
      name: tag_data.name
    };
  }
}