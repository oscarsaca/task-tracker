import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter<Task>();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  onSubmit() {
    if (this.text && this.day) {
      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.onAddTask.emit(newTask);

      this.text = '';
      this.day = '';
      this.reminder = false;
    } else if (this.text) {
      alert('Please fill out a day!');
    } else if (this.day) {
      alert('Please fill out a task!');
    } else {
      alert('Please do something, bro!');
    }
  }
}
