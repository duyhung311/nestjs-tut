import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NotFoundError } from 'rxjs';
import { TaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';
import   { Task }  from './task.entity';
import { TaskRepository } from './task.repository';

@Injectable()
export class TasksService {
  
  constructor(
    @InjectRepository(TaskRepository)
    private tasksRepository: TaskRepository,
  ) {}  
  
  getAllTask(): Promise<Task[]> {
    return this.tasksRepository.getTasks();
  }

  createTask(taskDto: TaskDto): Promise<Task> {
    return this.tasksRepository.createTask(taskDto);
  }

  // findTaskById(id: string): TaskModel {
  //   const task = this.ar.find((ar) => ar.id === id);
  //   if(!task) throw new NotFoundException();
  //   return task;
  // }

  getTaskById(id: string): Promise<Task>{
    return this.tasksRepository.getTaskById(id);
  }


  deleteTaskById(id: string): Promise<Task> {
    return this.tasksRepository.deleteTask(id);
  }

  updateTaskById(id: string, status: TaskStatus): Promise<Task> {
  
    return this.tasksRepository.updateTask(id, status);
  }
  // docker run --name postgres-nest -p 5432:5432 -e POSTGRES_PASSWORD=postgres -d postgres
}
