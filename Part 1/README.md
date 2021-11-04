# Content

### 1. Use REST API Decorator
 Use @Get(), @Delete, @Post(), @Patch() decorators as a represention of HTTP method to implement: 
- Get all task
- Get a specific task by ID
- Create a task
- Delete a task
- Update the status of the task
 
 ### 2. Decorators
 **@Body()** to retrieve body parameters of a request <br>
 **@Controller()** to mark a controller <br>
 **@Injectable()** to mark which can be injected to @Module <br>
 **@Module()** to include other classes as dependencies <br>
 **@Param(/:id)** mark a variable that can be extracted from the URL <br>
 
 ### 3. Class DTO
 Use DTO (Data Transfer Object)(define as a class) to define the shape of an incoming data request. DTO object can be reuse throughtout the application
 ```
 export class TaskDto{
    // define which data you want to get from the request, for example
    // id: string
 }
 ```
 
 
