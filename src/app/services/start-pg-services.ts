import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StartPgServices {
  public bgList:any=[{
      'startdate':'31/04/2026',
      'lastdate':'31/04/2026',
      'bgImage': 'assets/img/festivals/mahavir-jayanti.jpg'
    },
    {
      'startdate':'03/04/2026',
      'lastdate':'03/04/2026',
      'bgImage': 'assets/img/gp.jpg'
    }
  ];

}
