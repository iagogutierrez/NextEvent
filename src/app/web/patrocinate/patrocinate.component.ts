import { Component, OnInit, } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { NativeDateAdapter, DateAdapter,
  MAT_DATE_FORMATS } from '@angular/material/core';
import { formatDate } from '@angular/common';

interface Evento {
  value: string;
  viewValue: string;
}

export const PICK_FORMATS = {
  parse: {dateInput: {month: 'short', year: 'numeric', day: 'numeric'}},
  display: {
      dateInput: 'input',
      monthYearLabel: {year: 'numeric', month: 'short'},
      dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
      monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

class PickDateAdapter extends NativeDateAdapter {
  override format(date: Date, displayFormat: Object): string {
      if (displayFormat === 'input') {
          return formatDate(date,'dd/MM/yyyy',this.locale);;
      } else {
          return date.toDateString();
      }
  }
}

@Component({
  selector: 'app-patrocinate',
  templateUrl: './patrocinate.component.html',
  styleUrls: ['./patrocinate.component.scss'],
  providers: [
    {provide: DateAdapter, useClass: PickDateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: PICK_FORMATS}
]
})
export class PatrocinateComponent implements OnInit{
 
  date : any;
  form!: FormGroup;

  constructor() { }

  eventos: Evento[] = [
    {value: `Concierto`, viewValue: 'Concierto'},
    {value: `Exposición`, viewValue: 'Exposición'},
    {value: `Feria`, viewValue: 'Feria'},
    {value: `Teatro`, viewValue: 'Teatro'},
    {value: `Carrera`, viewValue: 'Carrera'},
  ]
  
  ngOnInit() {
  }

  save(event: Event){
    event.preventDefault();
    const value = this.form.value;
    console.log(value);
  }
}
