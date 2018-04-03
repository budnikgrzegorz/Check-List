import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';


  tasksList: Array<string> = [];
  tasksDone: Array<string> = [];

  ngOnInit(): void {
    this.tasksList = ['Sprzątanie kuwety', 'Nauka Angualra', 'Podlewanie kwiatow', 'Zakupy'];
  }

  add(task: string) {
    this.tasksList.push(task);

  }

  remove(task: string) {
    this.tasksList = this.tasksList.filter(e => e !== task);
  }

  done(task: string) {
    this.tasksDone.push(task);
    this.remove(task);
  }
}
