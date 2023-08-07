import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterTeamsComponent } from './register-teams/register-teams.component';
import { TournamentComponent } from './tournament/tournament.component';
import { TeamsService } from './services/teams.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterTeamsComponent,
    TournamentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
