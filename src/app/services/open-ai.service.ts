import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';

export interface OpenAIResponse {
  id:      string;
  object:  string;
  created: number;
  model:   string;
  choices: Choice[];
  usage:   Usage;
}

export interface Choice {
  index:         number;
  message:       Message;
  finish_reason: string;
}

export interface Message {
  role:    string;
  content: string;
}

export interface Usage {
  prompt_tokens:     number;
  completion_tokens: number;
  total_tokens:      number;
}



@Injectable({
  providedIn: 'root',
})
export class OpenAIService {
  private url: string = 'https://api.openai.com/v1/chat/completions';
  constructor(private http: HttpClient) {}

  ask(prompt: string) {
    return this.http.post<OpenAIResponse>(
      this.url,
      {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
        temperature: 0.7,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        authorization: "Bearer " +  environment.API_KEY},
      }
    );
  }
}
