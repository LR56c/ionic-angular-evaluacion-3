import {
  Component,
  Input,
  OnInit
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import {
  IonicModule,
  ModalController
} from '@ionic/angular'
import { Trip } from 'src/app/models/trip'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector   : 'app-trip-modification-modal',
  templateUrl: './trip-modification-modal.component.html',
  styleUrls  : [ './trip-modification-modal.component.scss' ],
  imports: [
    IonicModule,
    FormsModule
  ],
  standalone : true

})
export class TripModificationModalComponent {

  @Input({ required: true }) trip !: Trip

  constructor(
    private modalController: ModalController,
    private tripService : TripService
  ) { }

  async confirmModal() {
    await this.tripService.updateTrip( this.trip )
    return this.modalController.dismiss( null, 'confirm' )
  }

  closeModal() {
    return this.modalController.dismiss( null, 'cancel' )
  }
}
