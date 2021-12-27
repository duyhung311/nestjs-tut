import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from './tasks/task.entity';
import  { TaskRepository }  from './tasks/task.repository';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/tasks.service';


@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'task-management',
      autoLoadEntities: true,
      synchronize: true,
      entities: ['../dist/task/task.entity.ts']
    })
    ,
  ],
})
export class AppModule {}
