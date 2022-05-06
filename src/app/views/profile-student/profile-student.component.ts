import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {

  myGames = [
    "Dota2,", "Valorant,", "CSGO"
  ];

  myHeroes = [
    "Omen,", "Monkey King,", "Jett"
  ];

  constructor() { }
  ngOnInit(): void {
  }

}
