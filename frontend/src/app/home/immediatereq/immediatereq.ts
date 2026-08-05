import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBanner } from "../../component/top-banner/top-banner";
import { JobServices } from '../../services/job-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-immediatereq',
  imports: [CommonModule, TopBanner],
  templateUrl: './immediatereq.html',
  styleUrl: './immediatereq.css',
})
export class Immediatereq {
  title:string="IMMEDIATE REQUIREMENT";
  romeJobList:any;
  singJobList:any;

  constructor(private jobServices:JobServices, private router:Router){}

  ngOnInit(){
    this.romeJobList = this.jobServices.romeJobList;
    this.singJobList = this.jobServices.singJobList;
  }

  jobSelected(pos:string, fleet:string){
    this.router.navigate(['/home/shippersonnel'], { queryParams: { pos: pos, req: fleet.toUpperCase()==='ROME'? 'romeImReq':'singImReq'}});
  }
}
