import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { ActivatedRoute } from '@angular/router';
import { JobServices } from '../../services/job-services';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { GlobalServices } from '../../services/global-services';

@Component({
  selector: 'app-careers',
  imports: [CommonModule, TopBanner, FormsModule, ReactiveFormsModule],
  templateUrl: './careers.html',
  styleUrl: './careers.css',
})
export class Careers {
  title:string="CAREER";

  isNameValid:boolean=false;
  isMobiValid:boolean=false;
  isMailValid:boolean=false;
  isFileValid:boolean=false;
  currentJob:any;
  keyReq:string="";
  enteredName:string="";
  enteredMobi:string="";
  enteredMail:string="";
  enteredFile:any;
  isSubmitClicked:boolean=false;

  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
  ]);

  mobi = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{10}$/),
    Validators.maxLength(10)
  ]);

  constructor(private route:ActivatedRoute, private jobService:JobServices, private globalService:GlobalServices){}
  
  ngOnInit(){
    this.route.queryParamMap.subscribe((params) => {
      const req = params.get('pos');
      this.currentJob = this.jobService.jobList.filter((item:any)=>item.pos==req)[0];
      console.log(this.currentJob.location, req);
      this.keyReq=(this.currentJob.req).replaceAll('\n','<br>');
    });
  }

  submit(){
    this.isSubmitClicked=true;
    this.isNameValid=this.enteredName!='';
   
    this.isMobiValid=this.enteredMobi.toString().length == 10;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isMailValid = emailPattern.test(this.enteredMail);
    this.isFileValid = this.enteredFile;
    console.log(this.enteredFile);
    this.sendMail();
  }

  onFileSelected(event: Event){
    try{
      const input = event.target as HTMLInputElement;
      this.enteredFile = input.files?input.files[0]:null;
    }catch(err){
      console.log(err);
    }
  }

  onInput(event: Event, nextElement: HTMLInputElement) {
    const input = event.target as HTMLInputElement;
    
    // If we reach the max length (10), move focus
    if (input.value.length === 10) {
      nextElement.focus();
    }
  }

   sendMail(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.globalService.sendEmail(this.enteredName, "Test Subject", "lobo.s@damicoishima.com", "", "", "Test Body", this.enteredFile).subscribe({ //recruit.in
        next: (response) => {
          console.log("Success", JSON.stringify(response));
          resolve(response);
        },
        error: (error) => {
          console.log("sendMail: "+JSON.stringify(error));
          reject(error);
        }
      });
    });
  }

}
