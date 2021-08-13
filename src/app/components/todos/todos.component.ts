import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos!:Todo[];
  inputTodo:string = ""

  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First one',
        done: false,
      },
      {
        content: 'Second one',
        done: false,
      }
    ];
  }

  addTodo() {
    this.todos.push({
      content: this.inputTodo,
      done: false
    })
    this.inputTodo = ""
  }

  toggleDone (id:number):void {
    this.todos.map((v, i) => {
      if(i == id) v.done = !v.done;
      return v;
    })
  }

  deleteTodo(id:number):void {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
}
