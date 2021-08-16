import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question, CurrentQuestion } from 'src/app/models/question.model';
import { QuestionsService } from 'src/app/services/questions.service';


@Component({
  selector: 'app-fact-question',
  templateUrl: './fact-question.component.html',
  styleUrls: ['./fact-question.component.css']
})
export class FactQuestionComponent implements OnInit {

  @Input() current: CurrentQuestion;
  
  constructor() {}

  ngOnInit(): void {
  }
}
