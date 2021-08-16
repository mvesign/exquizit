import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactQuestionComponent } from './components/fact-question/fact-question.component';
import { OverviewComponent } from './components/overview/overview.component';
import { QuestionsService } from './services/questions.service';
import { DoodleQuestionComponent } from './components/doodle-question/doodle-question.component';
import { SoundQuestionComponent } from './components/sound-question/sound-question.component';
import { QuestionComponent } from './components/question/question.component';
import { SafePipe } from './services/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FactQuestionComponent,
    OverviewComponent,
    DoodleQuestionComponent,
    SoundQuestionComponent,
    QuestionComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    QuestionsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
