import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { ActivatedRoute } from '@angular/router';
import { JobServices } from '../../services/job-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ship-personnel',
  imports: [TopBanner, CommonModule],
  templateUrl: './ship-personnel.html',
  styleUrl: './ship-personnel.css',
})
export class ShipPersonnel {
  title:string="SHIP PERSONNEL";
  requirement:string="";
  jobList:any[]=[];
  isNameValid:boolean=false;

  constructor(private jobServices:JobServices, private route:ActivatedRoute){}

  ngOnInit(){
    this.jobList=this.jobServices.romeJobList;
    this.route.queryParamMap.subscribe((params) => {
      const req = params.get('req');
      if(req=="romeImReq"){
        this.requirement = "ROME FLEET IMMEDIATE REQUIREMENTS";
      }else if(req=="romeGReq"){
        this.requirement = "ROME FLEET GENERAL REQUIREMENTS";
      }else if(req=="singImReq"){
        this.requirement = "SINGAPORE FLEET IMMEDIATE REQUIREMENTS";
      }else if(req=="singGReq"){
        this.requirement = "SINGAPORE FLEET GENERAL REQUIREMENTS";
      }
    });
  }
}
