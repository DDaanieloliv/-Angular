import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = 'Daniel' // Fazemos esse dado se comonicar com o componente 'parent-data'. (1º passo)

  userData = {
    email: 'daniel@gmail.com',
    role: 'Admin',
  }

  title = 'LetsAngular';
}
