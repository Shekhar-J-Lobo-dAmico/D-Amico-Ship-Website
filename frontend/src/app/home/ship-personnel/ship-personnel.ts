import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { ActivatedRoute } from '@angular/router';
import { JobServices } from '../../services/job-services';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-ship-personnel',
  imports: [TopBanner, CommonModule, FormsModule],
  templateUrl: './ship-personnel.html',
  styleUrl: './ship-personnel.css',
})
export class ShipPersonnel {
  title:string="SHIP PERSONNEL";
  requirement:string="";
  jobList:any[]=[];
  isPosiValid:boolean=false;
  isNameValid:boolean=false;
  isMobiValid:boolean=false;
  isMailValid:boolean=false;
  isFileValid:boolean=false;
  isSubmitClicked:boolean=false;
  selectedPosi:any;
  enteredName:string="";
  enteredMobi:string="";
  enteredMail:string="";
  enteredFile:any;
  email = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
  ]);

  mobi = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]{10}$/),
    Validators.maxLength(10)
  ]);
  
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

  onFileSelected(event: Event){
    try{
      const input = event.target as HTMLInputElement;
      this.enteredFile = input.files?input.files[0]:null;
    }catch(err){
      console.log(err);
    }
  }

  submit(){
    this.isSubmitClicked=true;
    this.isNameValid=this.enteredName!='';
   
    this.isMobiValid=this.enteredMobi.toString().length == 10;

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    this.isMailValid = emailPattern.test(this.enteredMail);
    this.isPosiValid = this.selectedPosi;
    this.isFileValid = this.enteredFile;
    // console.log(this.enteredFile);
  }

  onInput(event: Event, nextElement: HTMLInputElement) {
    const input = event.target as HTMLInputElement;
    
    // If we reach the max length (10), move focus
    if (input.value.length === 10) {
      nextElement.focus();
    }
  }

}
