import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { CommonModule } from '@angular/common';
import { JobServices } from '../../services/job-services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shore-personnel',
  imports: [TopBanner, CommonModule],
  templateUrl: './shore-personnel.html',
  styleUrl: './shore-personnel.css',
})
export class ShorePersonnel {
  title:string="SHORE PERSONNEL";
  jobList:any[]=[];

  constructor(private jobServices:JobServices, private router:Router, private route:ActivatedRoute){}

  ngOnInit(){
    this.jobList = this.jobServices.jobList;
    this.route.queryParamMap.subscribe((params) => {
      const req = params.get('req');
    });
    
  }

  jobSelected(pos:string){
    console.log(pos);
    this.router.navigate(['/home/careers'], { queryParams: { pos: pos }});
  }
}
