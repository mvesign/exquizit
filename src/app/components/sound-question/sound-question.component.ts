import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CurrentQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-sound-question',
  templateUrl: './sound-question.component.html',
  styleUrls: ['./sound-question.component.css']
})
export class SoundQuestionComponent implements OnInit, OnChanges {

  @Input() current: CurrentQuestion;

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
}
