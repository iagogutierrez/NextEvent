import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  Ruta_logo: string;
  Ruta_Github: string;
  Ruta_Linkedin: string;
  
  constructor() {
    //image location
    this.Ruta_logo = '../../assets/images/LogoNextEvent.png',
    this.Ruta_Github='../../assets/images/github-mark.png'
    this.Ruta_Linkedin='../../assets/images/linkedin.png'

  }

}