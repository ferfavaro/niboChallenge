import { Component } from '@angular/core';
import { TeamsService } from '../services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent {
  teams: string[] = [];

  constructor(private teamsService: TeamsService, private router: Router){
    this.teams = this.teamsService.getTeams();
  }

  selectedWinners: string[] = new Array(6);

  selectWinner(battleIndex: number, winnerName: string) {
      this.selectedWinners[battleIndex] = winnerName;

    if (battleIndex === 6) {
      alert("O time " + winnerName + " foi campeão!")
      this.teamsService.clearTeams();
      this.router.navigate(['/registerTeams'])
    }
  }
}


