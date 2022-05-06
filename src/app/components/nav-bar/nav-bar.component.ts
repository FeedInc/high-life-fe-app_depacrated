import { Component, OnInit, ViewChild } from '@angular/core';
import { SideBarComponent } from '../side-bar/side-bar.component';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @ViewChild(SideBarComponent) sideBar?: SideBarComponent;
  ngOnInit(): void {

  }

  displaySideBar() {
    this.sideBar?.drawer?.toggle();
  }
}
