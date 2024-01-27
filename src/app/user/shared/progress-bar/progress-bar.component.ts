import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  //the progress variable is sent by the component that uses the Progress bar and every time the progress changes
  //the progress Input is provided again
  @Input() progress: number = 0;
}
