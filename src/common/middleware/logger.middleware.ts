import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

// provider class way of handling:
@Injectable()
// implements the NestMiddleware interface to be used as middleware. ref: https://docs.nestjs.com/middleware
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request...');
    next();
  }
}
