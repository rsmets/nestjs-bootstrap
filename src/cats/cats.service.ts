import { Injectable, Scope } from '@nestjs/common';
import { Cat } from './interfaces/cat.interface';

// Expectedly defining scope. ref: https://docs.nestjs.com/fundamentals/injection-scopes
// Default means a singleton which is created upon application start and shared throughout the project.
@Injectable({ scope: Scope.DEFAULT })
// @Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat) {
    console.log(`here ${cat.name}`);
    console.log(`here ${JSON.stringify(cat)}`);
    this.cats.push(cat);
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
