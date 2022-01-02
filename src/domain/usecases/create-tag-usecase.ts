import { Tag } from "../entities/tag";

export abstract class CreateTagUseCase {
    createTag: (tag_data: Tag) => Promise<any>
}