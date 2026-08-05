import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { StartPgServices } from '../../services/start-pg-services';

@Component({
  selector: 'app-top-menu-bar',
  imports: [],
  templateUrl: './top-menu-bar.html',
  styleUrl: './top-menu-bar.css',
})
export class TopMenuBar {

  activePage : string = "";
  
  // Can be a local path or external URL
  currentBg = '';//'assets/img/gp.jpg'; 

  constructor(private router:Router, private startService:StartPgServices){}

  ngOnInit(){
    // this.currentBg = this.getBg();
    if(this.router.url.toString().includes('/aboutus')){
      this.activePage="aboutus";
    }else if(this.router.url.toString().includes('/events')){
      this.activePage="events";
    }else if(this.router.url.toString().includes('/ourteam')){
      this.activePage="ourteam";
    }else if(this.router.url.toString().includes('/careers') || this.router.url.toString().includes('/shorepersonnel')){
      this.activePage="careers";
    }else if(this.router.url.toString().includes('/contactus')){
      this.activePage="contactus";
    }else{
      this.activePage="home";
    }
  }

  clickPage(page:string){
    if(page=="home"){
      this.router.navigate(['/home']);
    }
    else if(page=="ourfleet"){
      window.location.href = 'assets/html/our-fleet.html';
    }else if(page=="romeImReq" || page=="romeGReq" || page=="singImReq" || page=="singGReq"){
      this.router.navigate(['/home/shippersonnel'], { queryParams: { req: page }});
    }
    else{
      this.router.navigate(['/home/'+page]);
    }
    this.activePage=page;
  }

  getBg():string{
    try{
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison

      const image= this.startService.bgList.filter((item:any) => {
        const start = this.parseDate(item.startdate);
        const end = this.parseDate(item.lastdate);
        
        return today >= start && today <= end;
      });
      
      // const image=this.startService.bgList.filter((item:any) => item.date === todayFormatted);
      return image[0].bgImage;
    }catch(err){
      console.log(err);
      return "";
    }
  }

  parseDate(dateStr: string): Date {
    const [day, month, year] = dateStr.split('/').map(Number);
    return new Date(year, month - 1, day);
  }
}
