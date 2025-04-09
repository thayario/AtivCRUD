import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [Character, typeorm_1.TypeOrmModule.forRoot(ormconfig_1.config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
