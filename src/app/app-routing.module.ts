import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterTeamsComponent } from './register-teams/register-teams.component';
import { TournamentComponent } from './tournament/tournament.component';

const routes: Routes = [
  { path: 'registerTeams', component: RegisterTeamsComponent },
  { path: 'tournament', component: TournamentComponent },
  { path: '', redirectTo: '/registerTeams', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
