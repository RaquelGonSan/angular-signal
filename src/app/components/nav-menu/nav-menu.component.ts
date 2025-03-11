import { Component } from '@angular/core';
import  LandingPageComponent from '../../pages/landing-page/landing-page.component';
import { CommonModule, NgFor } from '@angular/common';
import { routes } from '../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  imports: [CommonModule, RouterModule],
  templateUrl: './nav-menu.component.html'
})
export class NavMenuComponent {



    public menuItems =  routes
    .map(route =>  route.children ?? [] )
    .flat()
    .filter( route => route && route.path  )  //filtramos por las rutas que existen y que tienne path, la ruta vacia la descartamos
    .filter( route => !route.path?.includes(':')) //si la ruta contiene : tambien la descartamos
  
  

 

}
