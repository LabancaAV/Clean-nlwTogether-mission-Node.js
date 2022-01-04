import { Compliment } from '../entities/compliment';

export abstract class CreateComplimentUseCase {
    createCompliment: (compliment_data: Compliment) => Promise<any>;
}