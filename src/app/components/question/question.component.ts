import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionsService } from 'src/app/services/questions.service';
import { CurrentQuestion } from 'src/app/models/question.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public routeSubscription: any;
  public type: string;
  public subject: string;
  public current: CurrentQuestion;

  constructor(
    private route: ActivatedRoute,
    private questionsService: QuestionsService
  ) { }

  ngOnInit(): void {
    this.routeSubscription = this.route.params.subscribe(params => {
      // First get the route data.
      this.type = params['type'];
      this.subject = params['subject'];
      
      // Secondly get the questions data.
      this.current = this.questionsService.getQuestion(this.type, this.subject, params['id']);
    });
  }

  answer() {
    this.current.answered = true;
  }

  reset() {
    this.current.answered = false;
  }
}
