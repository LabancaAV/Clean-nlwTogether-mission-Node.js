import { HttpResponse } from './http';

export abstract class Controller<T = any> {
  handle: (request: T) => Promise<HttpResponse>;
}