import {
  Component,
  OnInit
} from '@angular/core'
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/angular/standalone'
import { TripPreviewService } from 'src/app/services/trip-preview/trip-preview.service'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [ IonApp, IonRouterOutlet ]
} )
export class AppComponent implements OnInit {
  constructor(
    private tripService: TripService,
  )
  {}

  async ngOnInit(): Promise<void> {
   await this.tripService.init()
  }
}
