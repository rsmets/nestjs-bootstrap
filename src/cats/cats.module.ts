import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
  /**
   * exporting the internal provider for use between several other modules. Importing the CatModule means access to CatService.
   * ref: https://docs.nestjs.com/modules#shared-modules
   */
  exports: [CatsService],
})
export class CatsModule {}

/**
 * Modules can also import and export the same module. ref: https://docs.nestjs.com/modules#module-re-exporting
 * i.e.
 @Module({
  imports: [CommonModule],
  exports: [CommonModule],
})
export class CoreModule {}

 */

/**
 * Could make a module global for things the db connections and should only be done once. Afterward can be used everywhere without importing.
 * ref: https://docs.nestjs.com/modules#global-modules
 * @Global()
 */
