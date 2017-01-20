import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
@Input() internState:boolean;
@Input() juniorState:boolean;

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
   }
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
 ]
}

