import { CommonModule } from '@angular/common'
import {
  Component,
  OnInit
} from '@angular/core'
import {
  IonContent,
  IonHeader,
  IonSearchbar,
  IonSpinner,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone'
import { TripCardComponent } from 'src/app/components/trip-card/trip-card.component'
import { TripListComponent } from 'src/app/components/trip-list/trip-list.component'
import { TripPreviewCardComponent } from 'src/app/components/trip-preview-card/trip-preview-card.component'
import { TripPreviewListComponent } from 'src/app/components/trip-preview-list/trip-preview-list.component'
import { Trip } from 'src/app/models/trip'
import { TripPreview } from 'src/app/models/trip-preview'
import { TripPreviewService } from 'src/app/services/trip-preview/trip-preview.service'
import { TripService } from 'src/app/services/trip/trip.service'

@Component( {
  selector   : 'app-home',
  templateUrl: 'home.page.html',
  styleUrls  : [ 'home.page.scss' ],
  standalone : true,
  imports    : [ IonHeader, IonToolbar, IonTitle, IonContent, IonSearchbar,
    TripCardComponent, TripListComponent, IonSpinner, CommonModule,
    TripPreviewListComponent, TripPreviewCardComponent ]
} )
export class HomePage implements OnInit {
  constructor(
    private tripPreviewService: TripPreviewService,
    private tripService: TripService
  )
  {}

  ngOnInit(): void {
    this.tripService.trips$.subscribe( async ( trips ) => {
      this.originalTrips = new Map( trips.map( trip => [ trip.id, trip ] ) )
      this.tripsSearchResults   = this.compareTripsPreviews( this.tripsSearchResults )
    } )
  }


  loadingTrips: boolean             = false
  isSearching: boolean              = false
  tripsSearchResults: TripPreview[] = []
  originalTrips                     = new Map<string, Trip>()

  async handleInput( $event: any ): Promise<void> {
    this.loadingTrips = true
    const value       = ( $event.detail.value ?? '' ).trim()
    if ( value.length > 0 ) {
      this.isSearching          = true
      const tripPreviewSearched = await this.tripPreviewService.getTripsByTitle(
        value )
      this.tripsSearchResults   = this.compareTripsPreviews( tripPreviewSearched )
    }
    else {
      this.isSearching        = false
      this.tripsSearchResults = []
    }
    this.loadingTrips = false
  }

  compareTripsPreviews( tripPreviewSearched: TripPreview[] ): TripPreview[] {
    return tripPreviewSearched.map( trip => ( {
      ...trip,
      added: this.originalTrips.has( trip.id )
    } ) )
  }
}
