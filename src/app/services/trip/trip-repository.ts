import { Trip } from 'src/app/models/trip'

export abstract class TripRepository{
  abstract getTrips(): Promise<Trip[]>
  abstract getTrip(id: string): Promise<Trip | undefined>
  abstract addTrip(trip: Trip): Promise<void>
  abstract deleteTrip(id: string): Promise<void>
  abstract updateTrip(trip: Trip): Promise<void>
}
