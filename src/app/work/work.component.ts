import { Component, HostListener } from "@angular/core";
import { WORKS } from './works';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  works = WORKS;
  size: number;
  grid: any;

  constructor() {
    this.calculateSize()
  }

  private calculateSize() {
    let width = document.documentElement.clientWidth;
    document.documentElement.style.overflowX = 'hidden';
    if (width > 1000) {
      this.size = width / 5 ;
    }
    else if (width > 800) {
      this.size = width / 3;
    } else {
      this.size = width / 2;
    }
  }

  @HostListener('window:resize')
  onResize(): void {
    this.calculateSize();
  }
}


