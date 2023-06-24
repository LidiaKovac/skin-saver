import { Component } from '@angular/core';
import { OpenAIService } from 'src/app/services/open-ai.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {
  prompt!: string
  result!: string
  loading: boolean = false
  constructor(private ai: OpenAIService) {}

  loadPrompt(event:SubmitEvent) {
    event.preventDefault()
    this.ai.ask(this.prompt).subscribe(res => this.result = res.choices[0].message.content)
  }
}
