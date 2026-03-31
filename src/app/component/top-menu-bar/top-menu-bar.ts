import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-menu-bar',
  imports: [],
  templateUrl: './top-menu-bar.html',
  styleUrl: './top-menu-bar.css',
})
export class TopMenuBar {

  activePage : string = "";
  
  constructor(private router:Router){}

  ngOnInit(){
    if(this.router.url.toString().includes('/aboutus')){
      this.activePage="aboutus";
    }else if(this.router.url.toString().includes('/events')){
      this.activePage="events";
    }else if(this.router.url.toString().includes('/ourteam')){
      this.activePage="ourteam";
    }else if(this.router.url.toString().includes('/careers') || this.router.url.toString().includes('/shorepersonnel')){
      this.activePage="careers";
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
}
