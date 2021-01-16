import { HttpException, HttpStatus } from '@nestjs/common';

// ref: https://docs.nestjs.com/exception-filters
export class ForbiddenException extends HttpException {
  constructor() {
    super('Forbidden', HttpStatus.FORBIDDEN);
  }
}
