import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keypress)': 'handleKeyboardEvent($event)'
  }
})
export class AppComponent {
  private pauzed: boolean;
  private pauzedAudio: HTMLAudioElement;
  
  title = 'exQUIZit';
  
  constructor() {
    this.pauzedAudio = new Audio();
    this.pauzedAudio.src = "../assets/sounds/waiting-tune.mp3";
    this.pauzedAudio.load();
  }

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key != "p") {
      return;
    }

    this.pauzed != this.pauzed;

    if (this.pauzedAudio.paused) {
      this.pauzedAudio.play();
      this.pauzedAudio.loop = true;
    }
    else {
      this.pauzedAudio.pause();
      this.pauzedAudio.currentTime = 0;;
    }
  }
}