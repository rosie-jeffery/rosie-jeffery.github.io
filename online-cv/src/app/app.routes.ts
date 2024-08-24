import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page/home-page.component';
import { AboutMeComponent } from './about-me/about-me/about-me.component';
import { ContactComponent } from './contact-page/contact/contact.component';

export const routes: Routes = [
    {
        path: '',
        component: HomePageComponent,
        title: "Rosie Jeffery"
    },
    {
        path:'about-me',
        component: AboutMeComponent,
        title: "About Me"
    },
    {
        path:'contact',
        component: ContactComponent,
        title: "Contact"
    }
];
