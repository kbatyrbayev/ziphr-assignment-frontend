import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { TodoPriority } from '../shared/enums/todo-priority';
import { Todo, TodoForm } from '../shared/interfaces/todo';


@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.scss']
})
export class CreateTodoComponent implements OnInit {

  form = new FormGroup<TodoForm>({
    title: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
    /** 
     * By default it's be false, 
     * because task is just being created
     * */
    done: new FormControl(false, { nonNullable: true }),
    /** 
     * By default set current date
     * */
    date: new FormControl(Date.now(), { nonNullable: true, validators: [Validators.required] }),
    priority: new FormControl()
  });

  isSubmit = false;
  isLoading = false;
  todoPriorityEnum = TodoPriority;
  todoPriorityEnumKeys: any[] = [];

  get title() {
    return this.form.get('title');
  }

  get priority() {
    return this.form.get('priority');
  }

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    /** get all number keys from TodoPriority Enum to use in select dropdown */
    this.todoPriorityEnumKeys = Object.keys(this.todoPriorityEnum).filter(f => !isNaN(Number(f)));
  }

  create() {
    this.isSubmit = true;
    if (this.form.invalid) return;
    this.isSubmit = false;
    this.isLoading = true;
    this.form.disable();
    this.appService.updateTodos(this.form.value as Todo);
    setTimeout(() => {
      this.isLoading = false;
      this.form.reset();
      this.form.enable();
    }, 1000);
  }

}
