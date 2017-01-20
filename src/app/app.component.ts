import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  internState:boolean = false;
  juniorState:boolean = false;
 

changeJuniorState() {
  
this.juniorState = !this.juniorState;



}
changeTraineeState() {
  
this.internState = !this.internState;



}

}
