import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';

import { TasksComponent } from './tasks/tasks.component';


const routes = [
  {path: "", component: HomeComponent},
  {path: 'todos', component: TodosComponent },
  {path: 'tasks', component: TasksComponent}

]


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
