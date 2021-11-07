import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { TaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TaskModel, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) { }

  @Get()
  getAllTasks(): TaskModel[] {
    return this.tasksService.getAllTask();
  }

  @Post()
  createTask(@Body() taskDto: TaskDto): TaskModel {
    return this.tasksService.createTask(taskDto);
  }

  @Get('/:id')
  findTaskById(@Param('id') id: string): TaskModel{
    return this.tasksService.findTaskById(id);
  }

  @Delete('/:id')
  deleteTaskById(@Param('id') id: string): void {
    this.tasksService.deleteTaskById(id);
  }

  @Patch(':id/status')
  updateTaskById(
    @Param('id') id:string,
    @Body('status') updateTaskStatusDto: UpdateTaskDto
  ) :TaskModel {
    const { status } = updateTaskStatusDto;
    return this.tasksService.updateTaskById(id, status);
  }
}
