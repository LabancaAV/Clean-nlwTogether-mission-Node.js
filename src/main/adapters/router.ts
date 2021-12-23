import { Controller } from '../../presentation/contracts/controller';

export const adaptRoute = async (controller: Controller, req: any) => {
  const request = {
    ...req.body,
    ...req.params,
    ...req.query,
  };
  return await controller.handle(request);
};