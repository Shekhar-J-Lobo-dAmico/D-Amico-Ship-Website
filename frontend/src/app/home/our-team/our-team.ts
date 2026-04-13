import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { OurTeamServices } from '../../services/our-team-services';

@Component({
  selector: 'app-our-team',
  imports: [CommonModule, TopBanner],
  templateUrl: './our-team.html',
  styleUrl: './our-team.css',
})
export class OurTeam {

  title:string="MEET OUR TEAM";
  teams:any[]=[];
  constructor(private teamService:OurTeamServices){}

  ngOnInit(){
    this.teams = this.teamService.teams;
  }
}
