import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';



export function verifyJwt(req: Request, res: Response, next: Function) {
  const token = req.headers['authorization']?.replace('Bearer ', '');
  verify(token, '668685580583b0b9a11565ce6d59a570', (error, decoded) => {
    if (error)
      return res
        .status(401)
        .json({
          message: 'Unauthorized',
        })
        .end();
        
    req.params.user_sender = decoded.sub;
    req.params.id_user = decoded.sub;
    next();
  });
}