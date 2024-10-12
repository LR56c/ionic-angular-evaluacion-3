import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'
import { Trip } from 'src/app/models/trip'
import { TripPreview } from 'src/app/models/trip-preview'
import { TripPreviewInMemoryData } from 'src/app/services/trip-preview/trip-preview-in-memory-data'
import { TripPreviewRepository } from 'src/app/services/trip-preview/trip-preview-repository'
import { seedTrip } from 'src/app/utils/trip-seed'

@Injectable({
  providedIn: 'root'
})
export class TripPreviewService {

  repository : TripPreviewRepository = new TripPreviewInMemoryData(seedTrip)

  // private tripsSubject: BehaviorSubject<TripPreview[]> = new BehaviorSubject( [] as TripPreview[] )

  // trips$ = this.tripsSubject.asObservable()

  constructor() { }


  async getTripsByTitle(title: string): Promise<TripPreview[]> {
    // this.tripsSubject.next( await this.repository.getTripsByTitle(title) )
    return await this.repository.getTripsByTitle(title)
  }
  async getSuggestedTrips(): Promise<TripPreview[]>{
    // this.tripsSubject.next( await this.repository.getSuggestedTrips() )
    return await this.repository.getSuggestedTrips()
  }
  async getTripByID(id : string): Promise<TripPreview | undefined>{
    return await this.repository.getTripByID(id)
  }
}
