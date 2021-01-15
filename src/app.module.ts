import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [AppService, CatsService], // this is associating the token `CatsService` with the class `CatsService`. ref: https://docs.nestjs.com/fundamentals/custom-providers#standard-providers
  // providers: [
  //   {
  //     provide: CatsService,
  //     useClass: CatsService,
  //   },
  // ];

  // can make the provider def variable, i.e. below. ref: https://docs.nestjs.com/fundamentals/custom-providers#class-providers-useclass
  // const configServiceProvider = {
  //   provide: ConfigService,
  //   useClass:
  //     process.env.NODE_ENV === 'development'
  //       ? DevelopmentConfigService
  //       : ProductionConfigService,
  // };

  // @Module({
  //   providers: [configServiceProvider],
  // })

  // Other options too: factory providers, alias providers, non-service based providers. see the refs for docs.
})
export class AppModule {}
