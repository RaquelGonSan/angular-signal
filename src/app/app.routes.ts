import { Routes } from '@angular/router';

export const routes: Routes = [
   
    {
        path: 'landing-page',
        title: 'Landing Page',
        loadComponent: () => import('./pages/landing-page/landing-page.component'),
        children: [
            {
                path: 'home',
                title: 'Home',
                loadComponent: () => import('./pages/home-page/home-page.component'),
                
            },
            {
                path: 'books',
                title: 'Books',
                loadComponent: () => import('./pages/books-page/books-page.component')
            },
            {
                path: 'inputs-signal',
                title: 'Inputs Signal',
                loadComponent: () => import('./pages/inputs-signal-page/inputs-signal-page.component')
            },
            {
                path: 'locations',
                title: 'Locations - toSignal',
                loadComponent: () => import('./pages/location-page/location-page.component')
            }
        ]
    },
    {
        path: '',
        title: 'Landing Page',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },
    {
        path: '**',
        title: 'Landing Page',
        redirectTo: 'landing-page',
        pathMatch: 'full'
    },

    

 


];
