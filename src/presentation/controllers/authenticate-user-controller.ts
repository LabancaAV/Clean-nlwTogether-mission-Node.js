import { AuthenticateUserUseCase } from '../../domain/usecases/authenticate-user-usecase';
import { Controller } from '../contracts/controller';
import { errorResponse, HttpResponse, successResponse } from '../contracts/http';
import { AuthenticateUserDto } from '../dtos/authenticate-dto';

export class AuthenticateUserController implements Controller {
  constructor(private readonly authenticateUserUseCase: AuthenticateUserUseCase) {}

  async handle(request: AuthenticateUserDto): Promise<HttpResponse<any>> {
    try {
        console.log(request.email);
        
      return successResponse(await this.authenticateUserUseCase.authenticateUser(request.email, request.password));
    } catch (error) {
        console.log('opa',error);
      return errorResponse(error);
    }
  }
}