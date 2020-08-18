import { Component, OnInit } from '@angular/core';
import { Todo } from '../interfaces/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [
    {
      task: 'fold laundry',
      completed: false,
    },
    {
      task: 'dishes',
      completed: true,
    },
    {
      task: 'Call mom and dad',
      completed: true,
    },
  ];

  searchTerm: string;

  constructor() {}

  addTask(form: NgForm) {
    let newTask: Todo = {
      task: form.value.task,
      completed: false,
    };
    this.todos.push(newTask);
    form.reset();
  }

  setSearchTerm(form: NgForm) {
    this.searchTerm = form.value.searchTerm.trim().toLowerCase();
  }

  filter() {
    if (!this.searchTerm) {
      return this.todos;
    } else {
      return this.todos.filter((todo) => {
        let currentName = todo.task.toLowerCase().trim();
        return currentName.includes(this.searchTerm);
      });
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  completeTask(index: number) {
    this.todos[index].completed = true;
  }

  ngOnInit(): void {}
}
