import { CommonModule } from '@angular/common'
import {
  Component,
  OnInit
} from '@angular/core'
import { ModalController } from '@ionic/angular'
import { TripCardComponent } from 'src/app/components/trip-card/trip-card.component'
import { TripDeleteModalComponent } from 'src/app/components/trip-delete-modal/trip-delete-modal.component'
import { Trip } from 'src/app/models/trip'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: [ './trip-list.component.scss' ],
  imports: [
    CommonModule,
    TripCardComponent
  ],
  standalone: true
} )
export class TripListComponent implements OnInit {

  trips: Trip[] = []

  constructor(
    private tripService: TripService,
  ) { }


  async ngOnInit(): Promise<void> {
    this.tripService.trips$.subscribe( async ( trips ) => {
      this.trips = trips
    } )
  }
}
