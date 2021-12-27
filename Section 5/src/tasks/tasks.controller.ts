import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(@Body() taskDto: TaskDto):  Promise<Task> {
    return this.tasksService.createTask(taskDto);
  }

  @Get('/:id')
  findTaskById(@Param('id') id: string): Promise<Task>{
    return this.tasksService.getTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.deleteTaskById(id);
    
  }

  @Patch(':id/status')
  updateTaskById(
    @Param('id') id:string,
    @Body('status') updateTaskStatusDto: UpdateTaskDto
  ) :Promise<Task>{
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskById(id, status);
  }
}
