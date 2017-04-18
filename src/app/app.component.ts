///<reference path="../../node_modules/@types/jquery/index.d.ts"/>
import { Component, OnInit } from '@angular/core';
declare let particlesJS: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
    console.log('Init');
    // Initialize particlesJS
    particlesJS.load('particles-js', 'assets/js/particlesjs-config.json', function () {
      console.log('callback - particles.js config loaded');
    });
  }
}
