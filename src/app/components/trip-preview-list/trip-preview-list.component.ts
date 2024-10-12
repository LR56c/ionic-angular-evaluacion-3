import {
  CommonModule,
} from '@angular/common'
import {
  Component,
  Input,
  OnInit
} from '@angular/core'
import { TripCardComponent } from 'src/app/components/trip-card/trip-card.component'
import { TripPreviewCardComponent } from 'src/app/components/trip-preview-card/trip-preview-card.component'
import { TripPreview } from 'src/app/models/trip-preview'

@Component( {
  selector   : 'app-trip-preview-list',
  templateUrl: './trip-preview-list.component.html',
  styleUrls  : [ './trip-preview-list.component.scss' ],
  imports    : [
    CommonModule,
    TripCardComponent,
    TripPreviewCardComponent
  ],
  standalone : true
} )
export class TripPreviewListComponent {

  @Input( { required: true } ) trips !: TripPreview[]

  constructor() { }
}
