import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { ActivatedRoute } from '@angular/router';
import { JobServices } from '../../services/job-services';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, TopBanner],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {
  title:string="CAREER";

  isNameValid:boolean=false;
  currentJob:any;
  keyReq:string="";

  constructor(private route:ActivatedRoute, private jobService:JobServices){}
  
  ngOnInit(){
    this.route.queryParamMap.subscribe((params) => {
      const req = params.get('pos');
      this.currentJob = this.jobService.jobList.filter((item:any)=>item.pos==req)[0];
      console.log(this.currentJob.location, req);
      this.keyReq=(this.currentJob.req).replaceAll('\n','<br>');
    });
  }
}
