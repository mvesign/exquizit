import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { CurrentQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-doodle-question',
  templateUrl: './doodle-question.component.html',
  styleUrls: ['./doodle-question.component.css']
})
export class DoodleQuestionComponent implements OnInit {

  private timer: Subscription;

  @Input() current: CurrentQuestion;
  public started: boolean;
  public seconds: number;

  constructor() { }

  ngOnInit(): void {
    this.started = false;
    this.seconds = 30;
  }

  start() {
    this.started = true;
    this.seconds = 30;
    this.timer = interval(1000).subscribe(val => this.updateTimer());
  }

  stop() {
    this.timer.unsubscribe();
    this.started = false;
    this.seconds = 30;
  }

  updateTimer() {
    console.log(this.seconds);
    if (this.seconds == 0) {
      this.timer.unsubscribe();
      return;
    }

    if (this.current.answered)
      stop();

    if (this.started && this.seconds > 0)
        this.seconds--;
  }
}
