import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})

export class HelloComponent implements OnInit {

  adat :number;

  constructor() { 
    this.adat = 5;
  }

  ngOnInit(): void {

  }

  LegyenAlma() {
    this.adat = this.adat * 2;
  }

}
