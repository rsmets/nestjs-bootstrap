import { Body, Controller, Get, Post, Scope } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

// Expectedly defining scope. ref: https://docs.nestjs.com/fundamentals/injection-scopes#controller-scope
// Default means a singleton which is created upon application start and shared throughout the project.
@Controller({
  path: 'cats',
  scope: Scope.DEFAULT,
})
// @Controller('cats')
// @UseFilters(new HttpExceptionFilter()) // controller scope exception filter. ref: ref: https://docs.nestjs.com/exception-filters#binding-filters
export class CatsController {
  /**
   * The CatsService is injected through the class constructor. Notice the use of the private syntax.
   * This shorthand allows us to both declare and initialize the catsService member immediately in the same location.
   *
   * Nest will resolve the catsService by creating and returning an instance of CatsService
   * (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere).
   * This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property):
   * ref: https://docs.nestjs.com/providers
   * @param catsService
   */
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  // Using a exception handler filter. ref: https://docs.nestjs.com/exception-filters#binding-filters
  // @Post()
  // @UseFilters(new HttpExceptionFilter())
  // async create(@Body() createCatDto: CreateCatDto) {
  //   throw new ForbiddenException();
  // }

  @Get()
  async findAll(): Promise<Cat[]> {
    // throw new HttpException('Forbidden', HttpStatus.FORBIDDEN); // how to throw a standard exception ref: https://docs.nestjs.com/exception-filters

    // throwing a exception with a custom message.
    /**
    throw new HttpException({
      status: HttpStatus.FORBIDDEN,
      error: 'This is a custom message',
    }, HttpStatus.FORBIDDEN);
     */

    return this.catsService.findAll();
  }
}
