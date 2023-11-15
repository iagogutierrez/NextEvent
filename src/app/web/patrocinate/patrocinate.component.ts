import { Component } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl} from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';



@Component({
  selector: 'app-patrocinate',
  templateUrl: './patrocinate.component.html',
  styleUrls: ['./patrocinate.component.css'],
  
})
export class PatrocinateComponent {
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('always' as FloatLabelType);
  options = this.formBuilder.group({
    floatLabel: this.floatLabelControl,
  });
  constructor(private formBuilder: FormBuilder) { }

  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }

  ngOnInit() {
    /*this.patrocinateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      day: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern('^(http://www\\.|https://www\\.|http://|https://)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$')]]
    });*/
  }

  onSubmit() {
    // handle form submission here
    //console.log(this.patrocinateForm.value);
  }


}
