import img1 from '../assets/produts/1.webp'
import img2 from '../assets/produts/2.webp'
import img3 from '../assets/produts/3.webp'
import img4 from '../assets/produts/4.jpg'
import img5 from '../assets/produts/5.webp'

export const products = [
  {
    id: 'home-ro-1',
    name: 'Home RO – 8L',
    type: 'Home RO',
    capacity: '8 L',
    price: 13999,
    features: ['7-stage purification', 'Mineral guard', 'Auto shut-off', 'Wall/Counter mount'],
    image: img1,
  },
  {
    id: 'home-ro-2',
    name: 'Home RO – 10L',
    type: 'Home RO',
    capacity: '10 L',
    price: 16999,
    features: ['RO + UV + UF', 'Copper infusion', 'TDS up to 2000 ppm'],
    image: img2,
  },
  {
    id: 'under-sink-1',
    name: 'Under-sink RO – 12L',
    type: 'Under-sink RO',
    capacity: '12 L',
    price: 21999,
    features: ['Compact design', 'High flow', 'Food-grade tank'],
    image: img3,
  },
  {
    id: 'commercial-ro-1',
    name: 'Commercial RO – 25 LPH',
    type: 'Commercial RO',
    capacity: '25 LPH',
    price: 48999,
    features: ['Heavy-duty pump', 'Stainless frame', 'Low maintenance'],
    image: img5,
  },
  {
    id: 'uv-uf-1',
    name: 'UV / UF Purifier',
    type: 'UV / UF',
    capacity: 'No storage',
    price: 9999,
    features: ['Chemical-free', 'Instant purification', 'Ideal for low TDS'],
    image: img4,
  },
]
