import { FormControl } from '@angular/forms';
import { TodoPriority } from '../enums/todo-priority';

/**
 * Represents data structure of a single task/to-do.
 * @see AppService.todos
 */
export interface Todo {
  // Title of the task
  title: string;
  // Is this task completed/done?
  done: boolean;
  // Due date of the task (milliseconds)
  date: number;
  // Priority of the task
  priority: TodoPriority;
}

/**
 * Type of todo form
 * @see CreateTodosComponent.form
 */
export interface TodoForm {
  // Title of the task
  title: FormControl<string>;
  // Is this task completed/done?
  done: FormControl<boolean>;
  // Due date of the task (milliseconds)
  date: FormControl<number>;
  // Priority of the task
  priority: FormControl<null|TodoPriority>;
}
