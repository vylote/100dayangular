import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit, OnChanges {
  @Input() set progress(val: number) {
    //validation for validation
    console.log({val})
    
    this._progress = val
  }
  private _progress = 50;
  get progress() {
    return this._progress;
  }
  @Input() backgroundColor = '#ccc';
  @Input() progressColor = 'tomato';

  constructor() {}

  ngOnInit(): void {
    console.log('onInit', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change', {
      progress: this.progress,
      backgroundColor: this.backgroundColor,
      progressColor: this.progressColor,
    });
  }
}
