import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*export class HomeComponent {
  courseCode: string = 'APPDEV1';
  description: string = 'This is a course about Angular application development.';
  units : number = 3;
  isActive: boolean = true;
  stat: string = 'Active';
  welcomeMessage: string = 'Hello everyone this is a sample welcome message for the home component.';
}*/

export class HomeComponent {
appTitle: string = 'Welcome to Angular 20';
userImageUrl: string = 'assets/images/user-avatar.png';
isHighlighted: boolean = true;
currentDate: Date = new Date();
}
