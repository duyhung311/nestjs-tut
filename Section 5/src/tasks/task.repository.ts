import { EntityRepository, Not, Repository } from "typeorm";
import { Task } from "./task.entity";
import { TaskDto } from "./dto/create-task.dto";
import { NotFoundException } from '@nestjs/common';
import { TaskStatus } from "./task-status.enum";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {

    async getTasks(): Promise<Task[]>{
        const task = await this.find();
        if(!task) throw new NotFoundException();
        return task;
    }


    async getTaskById(id: string): Promise<Task>{
        const task = await this.findOne(id);
        if(!task) throw new NotFoundException();
        return undefined;
    }

    async createTask(createTaskDto: TaskDto) : Promise<Task> {    
        const {title, description} = createTaskDto;

        const task = this.create( {
            title,
            description,
            status: TaskStatus.OPEN
        });

        await this.save(task);
        return task;
    }

    async deleteTask(id: string) : Promise<Task>{
        const delTask = this.getTaskById(id);
        const result = await this.delete(id);
        if(result.affected ===0)
            throw new NotFoundException("${id} is not found");
        return delTask;
    }

    async updateTask(id: string, status : TaskStatus) : Promise<Task> {
        let task = await this.getTaskById(id);
        task.status = status;
        await this.save(task);
        return task;
    }

}