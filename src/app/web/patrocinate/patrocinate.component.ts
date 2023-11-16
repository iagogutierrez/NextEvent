import { Component, } from '@angular/core';
import {FormGroup,} from '@angular/forms';

import { FormlyFieldConfig } from '@ngx-formly/core';



@Component({
  
  selector: 'app-patrocinate',
  templateUrl: './patrocinate.component.html',
  styleUrls: ['./patrocinate.component.css'],
  
})
export class PatrocinateComponent {
  // Documentación de dependencia Formly: https://formly.dev/
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'nombre',
      type: 'input',
      props: {
        label: 'Nombre',
        placeholder: 'Nombre',
        required: true,
        description: 'Para saber a quien referirnos cuando tengamos que contactaros',
        floatlabel: 'always',
      },
    },
    {
      key: 'apellido',
      type: 'input',
      props: {
        label: 'Apellido',
        placeholder: 'Apellido',
        required: false,
      },
    },
    {
      key: 'ubicacion',
      type: 'input',
      props: {
        label: 'Ubicación del evento',
        placeholder: 'Apellido',
        required: false,
      },
    },
    {
      key: 'nombreEvento',
      type: 'input',
      props: {
        label: 'Nombre del Evento',
        placeholder: 'Apellido',
        required: false,
      },
    },
    {
      key: 'fechaInicio',
      type: 'input',
      props: {
        label: 'Fecha de Inicio',
        placeholder: 'Apellido',
        required: false,
      },
    },
    {
      key: 'fechaFinal',
      type: 'input',
      props: {
        label: 'Fecha Final',
        placeholder: 'Apellido',
        required: false,
      },
    },
  ]

  onSubmit() {
    if(this.form.valid){
      alert(JSON.stringify(this.model, null,))
      console.log("HOLA")
    }
  }


}
