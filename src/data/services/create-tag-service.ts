import { CreateTagUseCase } from "../../domain/usecases/create-tag-usecase";
import { TagRepositoryImpl } from "../../infra/repositories/tag-repository";
import { TagMapper } from "../mappers/tag-mapper";
import { TagModel } from "../models/tag-model";

export class CreateTagService implements CreateTagUseCase{
    constructor(private readonly tagRepository: TagRepositoryImpl){}

    async createTag(tag: TagModel): Promise<any>{

        if(!tag.name) throw new Error("Incorrect name!");

        const tagAlreadyExists = await this.tagRepository.findTagByName(tag.name);

        if(tagAlreadyExists) throw new Error("Tag already exists");

        let tagMapper = await TagMapper.toRepository(tag);

        const saved_tag = await this.tagRepository.createTag(tagMapper);

        return saved_tag;

    }

}