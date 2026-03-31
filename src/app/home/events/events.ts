import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TopBanner } from '../../component/top-banner/top-banner';
import { EventServices } from '../../services/event-services';

@Component({
  selector: 'app-events',
  imports: [CommonModule, TopBanner],
  templateUrl: './events.html',
  styleUrl: './events.css',
})
export class Events {
  @Input() title:string="EVENTS";

  events:any[]=[];

  constructor(private eventServices:EventServices){};

  ngOnInit(){
    this.events = this.eventServices.events;
  }
}
