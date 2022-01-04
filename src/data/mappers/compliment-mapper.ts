import { v4 as uuid } from "uuid";
import { ComplimentModel } from "../models/compliment-model";

export class ComplimentMapper {
  static async toRepository(compliment_data: ComplimentModel): Promise<any> {
    return {
        id: uuid(),
        tag_id: compliment_data.tag_id,
        user_receiver: compliment_data.user_receiver,
        user_sender: compliment_data.user_sender,
        message: compliment_data.message
    };
  }
}