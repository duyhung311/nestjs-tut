export interface TaskModel {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROG = 'IN_PROGRESS',
  CLOSE = 'CLOSE',
}


