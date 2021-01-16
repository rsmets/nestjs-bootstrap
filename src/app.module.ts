import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CatsController } from './cats/cats.controller';
import { CatsModule } from './cats/cats.module';
import {
  logger,
  LoggerMiddleware,
} from './common/middleware/logger.middleware';

@Module({
  imports: [CatsModule],
  // controllers: [AppController],
  // providers: [AppService], // this is associating the token `CatsService` with the class `CatsService`. ref: https://docs.nestjs.com/fundamentals/custom-providers#standard-providers
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // using the provider class middleware:
    // consumer.apply(LoggerMiddleware).forRoutes('cats'); // only requests to the cat controller use the logger middleware ref: https://docs.nestjs.com/middleware#applying-middleware
    consumer
      .apply(LoggerMiddleware, logger)
      .forRoutes({ path: 'cats', method: RequestMethod.GET }); // only GET requests to the cat controller use the logger middleware
    // forRoutes({ path: 'ab*cd', method: RequestMethod.ALL }); can also use wildcards. ref: https://docs.nestjs.com/middleware#route-wildcards

    // using the functional middleware
    consumer.apply(logger).forRoutes(CatsController);
  }
}
