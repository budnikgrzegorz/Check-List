import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-task',
  templateUrl: './todo-task.component.html',
  styleUrls: ['./todo-task.component.css']
})
export class TodoTaskComponent implements OnInit {
  tasksList = [];

  constructor(private tasksService: TasksService) {
    this.tasksService.getTasksObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    });
  }

  ngOnInit() {}

  remove(task: string) {
    this.tasksService.remove(task);
  }
  done(task: string) {
    this.tasksService.done(task);
  }

  getColour(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }
}
