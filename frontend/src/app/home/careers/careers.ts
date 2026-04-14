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
  enteredAddr:string="";
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

  mailBody:string='';
  mailSent:any = null;

  constructor(private route:ActivatedRoute, private jobService:JobServices, private globalService:GlobalServices){}
  
  ngOnInit(){
    this.route.queryParamMap.subscribe((params) => {
      const req = params.get('pos');
      this.currentJob = this.jobService.jobList.filter((item:any)=>item.pos==req)[0];
      console.log(this.currentJob.location, req);
      this.keyReq=(this.currentJob.req).replaceAll('\n','<br>');
    });
  }

  async submit(){
    try{
      this.isSubmitClicked=true;
      this.isNameValid=this.enteredName!='';
    
      this.isMobiValid=this.enteredMobi.toString().length == 10;

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      this.isMailValid = emailPattern.test(this.enteredMail);
      this.isFileValid = this.enteredFile;
      console.log(this.enteredFile);
      if(this.isNameValid && this.isMobiValid && this.isMailValid && this.isFileValid)
        await this.createMail();

    }catch(err){
      console.log(err)
    }
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

  async createMail(){
    try{
      this.mailBody='Dear HR,<br><br>'+
            this.enteredName+' has applied against your job opening '+this.currentJob.pos+' at '+this.currentJob.location+' OFFICE at d\'Amico Ship Ishima India Private Limited. <br>Please find attached form.<br>'+
            'Applicant details:<br>'+
            'Name: '+this.enteredName+
            '<br>Address: '+this.enteredAddr+
            '<br>Mobile: '+this.enteredMobi+
            '<br>Email: '+this.enteredMail+
            '<br>Current Location: '+this.enteredAddr.split(',').pop()?.trim()+
            '<br>Post Applied For: '+this.currentJob.pos+' at '+this.currentJob.location+ ' OFFICE <br><br>Best Regards,<br>Admin'; 
    
    const resp:any = await this.sendMail();
    this.mailSent=resp?resp.status==true:false;
    console.log(this.mailSent);
    }catch(err){
      console.log(err);
    }
  }

  sendMail(): Promise<any>{
    return new Promise((resolve, reject)=>{
      this.globalService.sendEmail(this.enteredName, "Test Mail - Shore Job Application", "recruit.in@damicoishima.com", "", "", this.mailBody, this.enteredFile).subscribe({ //recruit.in@damicoishima.com   lobo.s@damicoishima.com
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
