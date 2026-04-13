import { Component } from '@angular/core';
import { TopBanner } from "../../component/top-banner/top-banner";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creators',
  imports: [TopBanner, CommonModule],
  templateUrl: './creators.html',
  styleUrl: './creators.css',
})
export class Creators {
  title:string="CREATORS";
}
