import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { WorkshopModel } from './models/workshop';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  contactInfo = {
    phone: '+40 721 246 424',
    email: 'accenteculturalecristian@gmail.com',
    address: 'Strada Ghimbavului 40A, Cristian, jud. Brașov, 507055'
  };

  constructor() {

  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
