import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './components/overview/overview.component';
import { QuestionComponent } from './components/question/question.component';

const routes: Routes = [
  { path: '', component: OverviewComponent, pathMatch: 'full' },
  { path: ':type/:subject/:id', component: QuestionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
