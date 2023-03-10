import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './modules/todos/todos.module';
import { DatabaseModule } from './shared/infra/db/database.module';

@Module({
  imports: [TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
