import { UserRepositoryImpl } from '../../infra/repositories/user-repository';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import env from '../../config/env';
import { AuthenticateUserUseCase } from '../../domain/usecases/authenticate-user-usecase';

export class AuthenticateUserService implements AuthenticateUserUseCase {
  constructor(private userRepository: UserRepositoryImpl) {}
  async authenticateUser(email: string, password: string): Promise<any> {

    const user = await this.userRepository.findUserByEmail(
        email
    );

    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch){
        throw new Error("Email/Password incorrect");
    }
    console.log(user.id_user)
    const token = sign(
        {
            email: user.email
        }, 
        "668685580583b0b9a11565ce6d59a570", 
        {
            subject: user.id_user,
            expiresIn: "1d"
        }
    );

    return token;
  }
}