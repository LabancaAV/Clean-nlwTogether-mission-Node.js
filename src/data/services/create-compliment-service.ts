import { CreateComplimentUseCase } from "../../domain/usecases/create-compliment-usecase";
import { ComplimentRepositoryImpl } from "../../infra/repositories/compliment-repository";
import { UserRepositoryImpl } from "../../infra/repositories/user-repository";
import { ComplimentMapper } from "../mappers/compliment-mapper";
import { ComplimentModel } from "../models/compliment-model";

export class CreateComplimentService implements CreateComplimentUseCase{
    constructor(private readonly complimentRepository: ComplimentRepositoryImpl, 
                private readonly userRepository: UserRepositoryImpl){}

    async createCompliment(compliment: ComplimentModel): Promise<any>{

        const { user_receiver, user_sender } = compliment;

        if(user_sender === user_receiver) throw new Error("Incorrect User Receiver");
        
        const userReceiverExists = await this.userRepository.findUserByUUID(user_receiver);

        if(!userReceiverExists) throw new Error("User Receiver does not exists!");

        let complimentMapper = await ComplimentMapper.toRepository(compliment);

        const saved_compliment = await this.complimentRepository.createCompliment(complimentMapper);

        return saved_compliment;

    }

}