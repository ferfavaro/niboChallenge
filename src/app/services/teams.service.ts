import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TeamsService {
  private teams: string[] = [];

  addNewTeam(newTeam: string) {
    this.teams.push(newTeam);
  }

  getTeams(): string[] {
    return this.teams;
  }

  clearTeams() {
    this.teams = [];
  }
}
