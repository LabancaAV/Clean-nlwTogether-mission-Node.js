export abstract class AuthUserError extends Error {
    constructor(message: string) {
      super(message);
    }
  }
  
  export class InvalidEmailError extends AuthUserError {
    constructor() {
      super('Email incorrect.');
    }
  }
  
  export class UserAlreadyExistsError extends AuthUserError {
    constructor() {
      super('User already exists.');
    }
  }
  