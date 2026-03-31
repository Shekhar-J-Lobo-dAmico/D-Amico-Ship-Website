import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-banner',
  imports: [CommonModule],
  templateUrl: './top-banner.html',
  styleUrl: './top-banner.css',
})
export class TopBanner {
  @Input() title:string="";
}
