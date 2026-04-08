import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EventServices {
  public events:any[]=[
    {
      'link':'assets/img/events/2025.jpg',
      'year': '2025',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 26th and 27th March 2025 with theme “FORGING AHEAD – Stronger, Safer, Smarter”.'
    },
    {
      'link':'assets/img/events/2024.jpg',
      'year': '2024',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 13th and 14th March 2024 with theme “NAVIGATING THE WAVES OF CHANGE”'
    },
    {
      'link':'assets/img/events/2023.jpg',
      'year': '2023',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 3rd and 4th May 2023 with theme “SAILING INTO THE FUTURE together”'
    },
    {
      'link':'assets/img/events/2019.jpg',
      'year': '2019',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 20th & 21st of February 2019 with theme “PROPEL AHEAD FOR A SAFER TOMORROW”'
    },
    {
      'link':'assets/img/events/2018.jpg',
      'year': '2018',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 19th & 20th of March 2018 with theme “EYE FOR SAFETY”'
    },
    {
      'link':'assets/img/events/2017.jpg',
      'year': '2017',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 24th & 25th of March 2017 with theme “ANCHORS OF STRENGTH”'
    },
    {
      'link':'assets/img/events/2016.jpg',
      'year': '2016',
      'discription': 'Seminar held at Hotel JW Marriott, Mumbai on 16th & 17th of February, 2016 with theme “TIDES OF CHANGE”'
    },
    {
      'link':'assets/img/events/2015.jpg',
      'year': '2015',
      'discription': 'Safety Seminar held at Hotel Leela, Mumbai on 16th & 17th February, 2015'
    },
    {
      'link':'assets/img/events/2014.jpg',
      'year': '2014',
      'discription': 'Seminar held at Hotel Leela, Mumbai on 6th & 7th February, 2014.'
    }
  ];
}
