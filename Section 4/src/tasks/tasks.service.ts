import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { NotFoundError } from 'rxjs';
import { TaskDto } from './dto/create-task.dto';
import { TaskModel, TaskStatus } from './task.model';

@Injectable()
export class TasksService {
  private ar: TaskModel[] = [];

  getAllTask(): TaskModel[] {
    return this.ar;
  }

  createTask(taskDto: TaskDto): TaskModel {
    const { title, description } = taskDto;
    const task: TaskModel = {
      id: randomUUID(),
      title,
      description,
      status: TaskStatus.OPEN,
    }
    this.ar.push(task);
    return task;
  }

  findTaskById(id: string): TaskModel {
    const task = this.ar.find((ar) => ar.id === id);
    if(!task) throw new NotFoundException();
    return task;
  }


  deleteTaskById(id: string): void {
    const task: TaskModel = this.findTaskById(id);
    const index:number = this.ar.indexOf(task);
    this.ar.splice(index, 1);
  }

  updateTaskById(id: string, status: TaskStatus): TaskModel{
    const task = this.findTaskById(id);
    task.status = status;
    return task;
  }
}
