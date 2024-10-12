import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { Trip } from 'src/app/models/trip'
import { TripInMemoryData } from 'src/app/services/trip/trip-in-memory-data'
import { TripRepository } from 'src/app/services/trip/trip-repository'

@Injectable( {
  providedIn: 'root'
} )
export class TripService {

  repository: TripRepository = new TripInMemoryData()

  private tripsSubject: BehaviorSubject<Trip[]> = new BehaviorSubject( [] as Trip[] )

  trips$ = this.tripsSubject.asObservable()

  async init(): Promise<void> {
    await this.getTrips()
  }

  async getTrips(): Promise<Trip[]> {
    const trips = await this.repository.getTrips()
    this.tripsSubject.next( trips )
    return trips
  }

  async getTrip( id: string ): Promise<Trip | undefined> {
    return await this.repository.getTrip( id )
  }

  async addTrip( trip: Trip ): Promise<void> {
    await this.repository.addTrip( trip )
    this.tripsSubject.next( await this.repository.getTrips() )
  }

  async deleteTrip( id: string ): Promise<void> {
    await this.repository.deleteTrip( id )
    this.tripsSubject.next( await this.repository.getTrips() )
  }

  async updateTrip( trip: Trip ): Promise<void> {
    await this.repository.updateTrip( trip )
    this.tripsSubject.next( await this.repository.getTrips() )
  }
}
