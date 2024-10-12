import {
  CommonModule,
  CurrencyPipe,
} from '@angular/common'
import {
  Component,
  Input,
} from '@angular/core'
import { IonicModule } from '@ionic/angular'
import { addIcons } from 'ionicons'
import { addCircleOutline } from 'ionicons/icons'
import { TripPreview } from 'src/app/models/trip-preview'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector   : 'app-trip-preview-card',
  templateUrl: './trip-preview-card.component.html',
  styleUrls  : [ './trip-preview-card.component.scss' ],
  imports: [
    CurrencyPipe,
    IonicModule,
    CommonModule
  ],
  standalone : true
})
export class TripPreviewCardComponent {

  @Input({ required: true }) trip !: TripPreview

  constructor(private tripService : TripService) {
    addIcons({
      addCircleOutline
    })
  }

  async addTrip(): Promise<void> {
    await this.tripService.addTrip({
      id: this.trip.id,
      country: this.trip.country,
      image: this.trip.image,
      title: this.trip.title,
      price: Math.floor(Math.random() * 100000) + 10000,
      customImage: false,
      transportIcon: 'airplane-outline'
    })
    this.trip.added = true
  }
}
