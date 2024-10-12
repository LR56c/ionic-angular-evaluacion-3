import { Trip } from 'src/app/models/trip'
import { ulid } from 'ulidx'

export const seedTrip  : Trip[] = [
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/58000/thumb-57388-100.jpg',
    price: 100_00,
    title: 'London, Ontario',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/43000/thumb-42715-100.jpg',
    price: 200_00,
    title: 'London',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/138000/thumb-137098-100.jpg',
    price: 300_00,
    title: 'East London, Eastern Cape',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/153000/thumb-152429-100.jpg',
    price: 400_00,
    title: 'London Eye',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/37000/thumb-36664-100.jpg',
    price: 500_00,
    title: 'London Borough of Hammersmith and Fulham',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/40000/thumb-39043-100.jpg',
    price: 600_00,
    title: 'London Borough of Lambeth',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/95000/thumb-94442-100.jpg',
    price: 700_00,
    title: 'London Bridge',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/119000/thumb-118741-100.jpg',
    price: 800_00,
    title: 'London Borough of Islington',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/51000/thumb-50357-100.jpg',
    price: 800_00,
    title: 'Natural History Museum, London',
    transportIcon: 'airplane-outline',
    customImage: false
  },
  {
    id: ulid(),
    country: 'United Kingdom',
    image: 'https://www.geonames.org/img/wikipedia/160000/thumb-159123-100.jpg',
    price: 800_00,
    title: 'New London, Connecticut',
    transportIcon: 'airplane-outline',
    customImage: false
  },
]
