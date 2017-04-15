///<reference path="../../node_modules/@types/jquery/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
declare var $: JQueryStatic;
declare var particlesJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'JS - Full-stack developer / Data scientist';

  ngOnInit(): void {
    console.log('Init');
    // Initialize particlesJS
    particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }
}
