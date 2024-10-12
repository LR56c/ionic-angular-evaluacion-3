// https://www.geonames.org/export/web-services.html
import { Trip } from 'src/app/models/trip'
import { TripRepository } from 'src/app/services/trip/trip-repository'
import { seedTrip } from 'src/app/utils/trip-seed'

export class TripInMemoryData implements TripRepository {
  constructor( private trips: Trip[] = [] ) {
    this.seed()
  }

  seed(): void {
    const randomIndex = Math.floor( Math.random() * seedTrip.length )
    if ( randomIndex === 0 ) {
      this.trips = seedTrip.slice( 0, 1 )
    }
    else {
      this.trips = seedTrip.slice( 0, randomIndex )
    }
  }

  async getTrips(): Promise<Trip[]> {
    return this.trips
  }

  async getTrip( id: string ): Promise<Trip | undefined> {
    return this.trips.find( trip => trip.id === id )
  }

  async addTrip( trip: Trip ): Promise<void> {
    this.trips.push( trip )
  }

  async deleteTrip( id: string ): Promise<void> {
    this.trips = this.trips.filter( trip => trip.id !== id )
  }

  async updateTrip( trip: Trip ): Promise<void> {
    const index       = this.trips.findIndex( t => t.id === trip.id )
    this.trips[index] = trip
  }
}
