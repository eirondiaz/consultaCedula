import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carddata',
  templateUrl: './carddata.component.html',
  styleUrls: ['./carddata.component.css']
})
export class CarddataComponent implements OnInit {

  @Input('per') persona: any
  @Input('signo') zodiaco: string
  @Input('edad') edad: string

  constructor() { }

  ngOnInit(): void {
  }

}
