import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @ViewChild("drawer") public drawer?: MatDrawer;
  navOptions = [
    { optionName: 'Coaches', icon: 'sports_kabaddi' },
    { optionName: 'Settings', icon: 'settings' },
    { optionName: '', icon: '' },
    { optionName: '', icon: '' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
}
