import { CurrencyPipe } from '@angular/common'
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core'
import {
  Camera,
  CameraResultType
} from '@capacitor/camera'
import {
  IonicModule,
  ModalController
} from '@ionic/angular'
import { addIcons } from 'ionicons'
import {
  airplaneOutline,
  cameraOutline,
  trashOutline
} from 'ionicons/icons'
import { TripDeleteModalComponent } from 'src/app/components/trip-delete-modal/trip-delete-modal.component'
import { TripModificationModalComponent } from 'src/app/components/trip-modification-modal/trip-modification-modal.component'
import { Trip } from 'src/app/models/trip'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector   : 'app-trip-card',
  templateUrl: './trip-card.component.html',
  styleUrls  : [ './trip-card.component.scss' ],
  imports: [
    IonicModule,
    CurrencyPipe
  ],
  standalone : true
})
export class TripCardComponent  {

  @Input({ required: true }) trip !: Trip

  constructor(
    private modalController: ModalController,
    private tripService : TripService) {
    addIcons( {
      cameraOutline,
      airplaneOutline,
      trashOutline
    })
  }

  async openDeleteModal(id : string) {
    const modal = await this.modalController.create({
      component: TripDeleteModalComponent,
      componentProps: {
        id: id
      },
      backdropDismiss: false,
    });
    await modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      console.log('delete confirm')
    }
  }


  async onPhoto(): Promise<void> {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64
    })

    const imagenBase64 = image.base64String
    if(!imagenBase64) return
    this.tripService.updateTrip({
      ...this.trip,
      image: imagenBase64,
      customImage: true
    })
  }

   async openModificationModal(): Promise<void> {
     const modal = await this.modalController.create({
       component: TripModificationModalComponent,
       componentProps: {
          trip: { ...this.trip }
       },
       backdropDismiss: false,
     });
     await modal.present();

     const { data, role } = await modal.onWillDismiss();

     if (role === 'confirm') {
       console.log('modification confirm')
     }
  }
}
