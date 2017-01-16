import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
public arr_int = [
   {
     first_name:'Alex',
     Surname:'Shakura',
     url:'assets/Shakura.jpg'
   },
   {
     first_name:'Alexey',
     Surname:'Popov',
     url:'assets/Alexey.jpg'
   },
   {
     first_name:'Dasha',
     Surname:'Kashaeva',
     url:'assets/Dasha.jpg'
   },
   {
     first_name:'Igor',
     Surname:'Mytropan',
     url:'assets/Igor.jpg'
   },
   {
     first_name:'Andrey',
     Surname:'Smiranin',
     url:'assets/Andrey.jpg'
   },
   {
     first_name:'Vitaliy',
     Surname:'Makogon',
     url:'assets/Vitaliy.jpg'
   },
 ] ;
 public arr_jun = [
   {
     first_name:'Alex',
     Surname:'Cherniy',
     url:'assets/Alex-jun.jpg'
   },
   {
     first_name:'Natasha',
     Surname:'Uzva',
     url:'assets/Natasha.jpg'
   },
   {
     first_name:'Jaroslav',
     Surname:'Polubiedov',
     url:'assets/Yaroslav.jpg'
   },
   {
     first_name:'Alla',
     Surname:'Logozinskaya',
     url:'assets/Alla.jpg'
   }
   
 ];

 public internState = false;
 public juniorState = false;
  constructor() { }

  changeIntState(){
    this.internState = !this.internState;
    this.juniorState = false;
  }

  changeJunState(){
    this.juniorState = !this.juniorState;
    this.internState = false;
  }
}
