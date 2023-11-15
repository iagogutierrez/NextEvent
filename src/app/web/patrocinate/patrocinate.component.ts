import { Component } from '@angular/core';
import {
  FormGroup, FormBuilder, FormControl,
  FormsModule,
  ReactiveFormsModule, Validators
} from '@angular/forms';

/*
import {
  FloatLabelType,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
*/
@Component({
  selector: 'app-patrocinate',
  templateUrl: './patrocinate.component.html',
  styleUrls: ['./patrocinate.component.css']
})
export class PatrocinateComponent {

  patrocinateForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.patrocinateForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      company: ['', Validators.required],
      day: ['', Validators.required],
      time: ['', Validators.required],
      duration: ['', Validators.required],
      website: ['', [Validators.required, Validators.pattern('^(http://www\\.|https://www\\.|http://|https://)?[a-z0-9]+([\\-\\.]{1}[a-z0-9]+)*\\.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$')]]
    });
  }

  onSubmit() {
    // handle form submission here
    console.log(this.patrocinateForm.value);
  }


}
