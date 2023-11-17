import { Component, OnInit } from '@angular/core';
import { Question, QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent implements OnInit {
  questions!: Question[];
  constructor(private questionsSrv: QuestionsService) {}

  ngOnInit(): void {
    this.questionsSrv.getQuestions().subscribe(res => this.questions = res)
  }
}
