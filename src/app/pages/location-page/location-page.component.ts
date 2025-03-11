import { Component, inject, OnInit } from '@angular/core';
import { LocationsService } from '../../services/locations.service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Location } from '../../interfaces/location';

@Component({
  selector: 'app-location-page',
  standalone: true,
  imports: [],
  templateUrl: './location-page.component.html',
})
export default class LocationPageComponent  {

  locationService = inject(LocationsService);

 // locations: Location[] = [];
  locations$ = this.locationService.getLocation();
  locations = toSignal(this.locations$, {
    initialValue: []
  })


    //forma tradicional con rxjs
//   ngOnInit(): void {
//     this.locationService.getLocation().subscribe({
//       next: (data) => {
//         this.locations = data; // 
//         console.log('Locations loaded:', this.locations); 
//       },
//       error: (err) => console.error('Error fetching locations:', err)
//     });
//   }
// }



 
}


