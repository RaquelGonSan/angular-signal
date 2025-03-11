import { Component } from '@angular/core';
import { NavMenuComponent } from "../../components/nav-menu/nav-menu.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  imports: [NavMenuComponent, RouterModule],
  templateUrl: './landing-page.component.html'
})
export default class LandingPageComponent {



}
