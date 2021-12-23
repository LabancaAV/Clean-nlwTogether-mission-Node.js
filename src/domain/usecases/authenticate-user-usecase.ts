export abstract class AuthenticateUserUseCase {
    authenticateUser: (email: string, password: string) => Promise<any>;
  }