import { AfterViewInit, Component } from "@angular/core";
import { SKILLS } from './skills';
import { ABOUT } from './text';
import { rubberAnimation } from "../rubber-animation";
import { Tag } from "@angular/compiler/src/i18n/serializers/xml_helper";
declare let TagCanvas: any;

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements AfterViewInit {
  title = 'My skills'.split('');
  about = ABOUT;
  skills = SKILLS;
  canvasId = 'myCanvas';
  canvasSize: number;
  innerHeight: number;
  innerWidth: number;

  constructor() {
    this.innerHeight = (window.innerHeight);
    this.innerWidth = (window.innerWidth);
    if(this.innerWidth >= 1260){
      this.canvasSize = 600;
    }
    else if(this.innerWidth >= 1060){
      this.canvasSize = 500;
    }
    else if(this.innerWidth >= 992){
      this.canvasSize = 450;
    }
    else {
      this.canvasSize = this.innerWidth - 50;
    }
  }

  mouseIn(event): void {
    let target = $(event.target);
    rubberAnimation(target);
  }

  ngAfterViewInit(): void {
    // More configuration options
    // http://www.goat1000.com/tagcanvas-options.php
    TagCanvas.textColour = '#08FDD8';
    TagCanvas.outlineMethod = 'size';
    TagCanvas.outlineIncrease = 2;
    TagCanvas.textHeight = 20;
    TagCanvas.fadeIn = 3000;
    TagCanvas.Start(this.canvasId);
  }
}
