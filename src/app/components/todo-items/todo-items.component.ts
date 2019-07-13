import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  @Input() abc: Todo;
  constructor() { }

  ngOnInit() {
  }
  setClasses() {
    let classes = {
      'todo': true,
      'is-complete': this.abc.completed
    }

    return classes;
  }

  onToggle(todo) {
    todo.completed = !todo.completed;
  }

  onDelete(todo) {
    console.log("delete")
  }


}
