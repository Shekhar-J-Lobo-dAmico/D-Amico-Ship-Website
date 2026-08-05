import { Routes } from '@angular/router';
import { Start } from './home/start/start';
import { Main } from './home/main/main';
import { Home } from './home/home/home';
import { AboutUs } from './home/about-us/about-us';
import { Events } from './home/events/events';
import { OurTeam } from './home/our-team/our-team';
import { ContactUs } from './home/contact-us/contact-us';
import { Careers } from './home/careers/careers';
import { ShorePersonnel } from './home/shore-personnel/shore-personnel';
import { ShipPersonnel } from './home/ship-personnel/ship-personnel';
import { Creators } from './home/creators/creators';
import { Immediatereq } from './home/immediatereq/immediatereq';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch: 'full' },
    {path: "start", component: Start},
    {path: 'home',
        component: Main, // This has sidebar + inner router-outlet
        children: [
        { path: '', component: Home },
        { path: 'aboutus', component: AboutUs },
        { path: 'events', component: Events },
        { path: 'ourteam', component: OurTeam },
        { path: 'contactus', component: ContactUs },
        { path: 'shorepersonnel', component: ShorePersonnel },
        { path: 'shippersonnel', component: ShipPersonnel },
        { path: 'careers', component: Careers },
        { path: 'dev', component: Creators },
        { path: 'immediatereq', component: Immediatereq },
        // more child routes...
        ]
    }
];
