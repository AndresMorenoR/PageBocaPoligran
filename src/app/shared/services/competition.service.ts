import { Injectable } from '@angular/core';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  private teams: Team[] = [];

  registerTeam(teamData: Omit<Team, 'id' | 'competitions'>): Team {
    const newTeam: Team = {
      id: this.generateId(),
      ...teamData,
      competitions: {
        competition1: 0,
        competition2: 0,
        competition3: 0,
        competition4: 0,
        competition5: 0,
        total: 0
      }
    };
    this.teams.push(newTeam);
    return newTeam;
  }

  // ... (otros métodos del servicio)
}