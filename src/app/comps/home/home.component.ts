import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  courseCode: string = 'APPDEV1';
  description: string = 'This is a course about Angular application development.';
  units : number = 3;
  isActive: boolean = true;
  stat: string = 'Active';
  welcomeMessage: string = 'Hello everyone this is a sample welcome message for the home component.';
}
