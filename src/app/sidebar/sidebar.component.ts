import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

//  public internState = false;
//  public juniorState = false;
  constructor() { }
  @Output() showJunior: EventEmitter<boolean> = new EventEmitter();
  @Output() showTrainee: EventEmitter<boolean> = new EventEmitter();

  changeIntState(){
    this.internState = !this.internState;
    this.juniorState = false;
    return this.showTrainee.emit(this.internState)
  }

  changeJunState() {
    this.juniorState = !this.juniorState;
    this.internState = false;
    return this.showJunior.emit(this.juniorState)
  }
}
