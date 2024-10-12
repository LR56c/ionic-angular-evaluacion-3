import {
  Component,
  Input,
  OnInit
} from '@angular/core'
import { ModalController } from '@ionic/angular'
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector   : 'app-trip-delete-modal',
  templateUrl: './trip-delete-modal.component.html',
  styleUrls  : [ './trip-delete-modal.component.scss' ],
  imports: [
    IonTitle,
    IonToolbar,
    IonHeader,
    IonContent,
    IonButton
  ],
  standalone : true
})
export class TripDeleteModalComponent  {

  constructor(
    private modalController: ModalController,
    private tripService : TripService
  ) { }

  @Input( { required: true } ) id !: string

  async confirmModal() {
    await this.tripService.deleteTrip( this.id )
    return this.modalController.dismiss( null, 'confirm' )
  }

  closeModal() {
    return this.modalController.dismiss( null, 'cancel' )
  }
}
