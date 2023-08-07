import { TeamsService } from '../services/teams.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-teams',
  templateUrl: './register-teams.component.html',
  styleUrls: ['./register-teams.component.css']
})
export class RegisterTeamsComponent {
  newTeam: string = '';
  teams: string[] = [];
  haveError: boolean = false;

  constructor(private teamsService: TeamsService, private router: Router){
    this.teams = this.teamsService.getTeams();
  }

  addNewTeam() {
    if (this.newTeam.trim() !== '') {
      this.teamsService.addNewTeam(this.newTeam);
      this.newTeam = '';
    }
  }

  removeTeam(team: string) {
    const index = this.teams.indexOf(team);
    if (index !== -1) {
      this.teams.splice(index, 1);
    }
  }

  navigateToTournament() {
    if (this.teams.length === 8) {
    this.router.navigate(['/tournament'])
    } else {
      this.haveError = true;
    }
  }

}
