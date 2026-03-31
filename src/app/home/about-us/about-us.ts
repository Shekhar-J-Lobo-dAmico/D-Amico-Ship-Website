import { Component } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';

@Component({
  selector: 'app-about-us',
  imports: [TopBanner],
  templateUrl: './about-us.html',
  styleUrl: './about-us.css',
})
export class AboutUs {
  title:string="ABOUT US & POLICY";
}
