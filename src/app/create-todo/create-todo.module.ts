import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateTodoComponent } from './create-todo.component';
import { DateConverterDirective } from '../shared/directives/date-converter.directive';

const routes: Routes = [
  {
    path: '',
    component: CreateTodoComponent
  },
];

@NgModule({
  declarations: [
    CreateTodoComponent,
    DateConverterDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class CreateTodoModule { }
