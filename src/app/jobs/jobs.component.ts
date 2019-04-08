import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  fecha: string = "Actualidad Mayo/2018";
  constructor() {  

  }

  ngOnInit() {
  }

}
