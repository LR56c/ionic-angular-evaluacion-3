import { Trip } from 'src/app/models/trip'
import { TripPreview } from 'src/app/models/trip-preview'
import { TripPreviewRepository } from 'src/app/services/trip-preview/trip-preview-repository'

export class TripPreviewInMemoryData implements TripPreviewRepository {

  private trips: TripPreview[] = []
  constructor( trips : Trip[] ) {
    this.trips = trips.map( ( trip, i ) => ( {
      referenceId: i.toString(),
      id         : trip.id,
      country    : trip.country,
      image      : trip.image,
      title      : trip.title,
      added      : false
    } ) )
  }

  async getTripsByTitle( title: string ): Promise<TripPreview[]> {
    return this.trips.filter( trip => trip.title.includes( title ) )
  }

  async getSuggestedTrips(): Promise<TripPreview[]> {
    const randomIndex1 = Math.floor( Math.random() * this.trips.length )
    const randomIndex2 = Math.floor( Math.random() * this.trips.length )
    return this.trips.slice( randomIndex1, randomIndex2 )
  }

  async getTripByID( id: string ): Promise<TripPreview | undefined> {
    return this.trips.find( trip => trip.referenceId === id )
  }
}
