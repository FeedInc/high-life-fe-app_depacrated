import { Component, Input, OnInit } from '@angular/core';
import { UsersApiService } from '../../services/users-api.service';
import { ToolsService } from '../../services/tools.service';
import { GamesApiService } from 'src/app/services/games-api.service';
import { Chart, registerables } from 'chart.js';
import { tick } from '@angular/core/testing';
import { NotFoundError, switchMap, zip, of, forkJoin } from 'rxjs';

@Component({
  selector: 'app-profile-description',
  templateUrl: './profile-description.component.html',
  styleUrls: ['./profile-description.component.scss'],
})
export class ProfileDescriptionComponent implements OnInit {
  @Input() id: string | null = null;
  user: any | null = null;
  chart: Chart | null = null;
  games: Array<any> = [];

  constructor(
    private apiUsers: UsersApiService,
    private tools: ToolsService,
    private apiGames: GamesApiService
  ) {
    Chart.register(...registerables); //To get type charts working fine!
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.initializeChart();
  }

  initializeChart() {
    this.chart = new Chart('canvas', {
      type: 'radar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
        datasets: [
          {
            label: '# of Votes',
            data: [39, 70, 50, 65, 23],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          r: {
            min: 0,
            max: 100,
            ticks: {
              stepSize: 20,
            },
          },
        },
      },
    });
  }

  socials = [
    { class: 'bi bi-instagram', name: 'Instagram' },
    { class: 'bi bi-facebook', name: 'Facebook' },
    { class: 'bi bi-reddit', name: 'Reddit' },
  ];

  getUserInfo(): void {
    this.apiUsers
      .getUser(this.id!)
      .pipe(
        switchMap((res: any) => {
          console.log(res);
          this.user = res;
          const ids = this.user?.games;
          const observables = forkJoin([
            this.apiGames.getGame(ids[0]),
            this.apiGames.getGame(ids[1]),
          ]);
          return observables;
        })
      )
      .subscribe({
        next: value => console.log(value),
        complete: () => console.log("Finished")
      });
  }

  get completeName() {
    return `${this.user?.name?.title} ${this.user?.name?.first} ${this.user?.name?.last}`;
  }
  get location() {
    return `${this.user?.location?.country} ${this.user?.location?.state} ${this.user?.location?.city}`;
  }

  get userType() {
    return this.tools.capitalize(this.user?.type);
  }
}
