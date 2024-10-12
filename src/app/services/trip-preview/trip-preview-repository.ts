import { TripPreview } from 'src/app/models/trip-preview'

export abstract class TripPreviewRepository{
  abstract getSuggestedTrips(): Promise<TripPreview[]>
  abstract getTripsByTitle(title : string): Promise<TripPreview[]>
  abstract getTripByID(id : string): Promise<TripPreview | undefined>
}
