import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { HomeComponent } from './components/home/home.component';

import { TasksComponent } from './tasks/tasks.component';
import { SigninComponent } from './components/signin/signin.component';


const routes = [
  {path: "", component: HomeComponent},
  {path: 'todos', component: TodosComponent },
  {path: 'tasks', component: TasksComponent},
  {path: 'login', component: SigninComponent},

]


@NgModule({

  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
