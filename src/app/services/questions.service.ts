import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type Question = {
  question: string;
  multiple_choice: boolean;
  open_question: boolean;
  possibilities: string[];
};

@Injectable({
  providedIn: 'root',
})
export class QuestionsService {
  private url: string = 'http://localhost:3001/questions';
  current: number = 0;
  questions!: Question[];
  constructor(private http: HttpClient) {}

  getQuestions() {
    return this.http.get<Question[]>(this.url);
  }
  get currentQuestion() {
    return new Observable((obs) => {
      if (!this.questions[this.current])
        obs.error("This question doesn't exist!");
      obs.next(this.questions[this.current]);
    });
  }
  increase() {
    this.current += 1;
  }
  decrease() {
    this.current -= 1;
  }
}
