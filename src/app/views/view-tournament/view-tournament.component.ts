import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-tournament',
  templateUrl: './view-tournament.component.html',
  styleUrls: ['./view-tournament.component.scss']
})
export class ViewTournamentComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}




/////////////////////////////////////



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Invictus Gaming vs LGD Gaming', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'NAVI vs AVG', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Invictus Gaming vs LGD Gaming', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'NAVI vs AVG', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'NAVI vs AVG', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'NAVI vs AVG', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Invictus Gaming vs LGD Gaming', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Invictus Gaming vs LGD Gaming', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Invictus Gaming vs LGD Gaming', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Invictus Gaming vs LGD Gaming', weight: 20.1797, symbol: 'Ne'},
];

