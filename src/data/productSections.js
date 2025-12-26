import img1 from '../assets/produts/1.webp'
import img2 from '../assets/produts/2.webp'
import img3 from '../assets/produts/3.webp'
import img4 from '../assets/produts/4.jpg'
import img5 from '../assets/produts/5.webp'
import img6 from '../assets/produts/6.jpeg'
import img7 from '../assets/produts/7.png'
import img8 from '../assets/produts/8.png'
import img9 from '../assets/produts/9.png'
import img10 from '../assets/produts/10.png'
import img11 from '../assets/produts/11.webp'
import img12 from '../assets/produts/12.jpg'
import img13 from '../assets/produts/13.jpg'
import img14 from '../assets/produts/14.png'
import img15 from '../assets/produts/15.webp'
import img16 from '../assets/produts/16.jpg'
import img17 from '../assets/produts/17.jpg'
import img18 from '../assets/produts/18.avif'
import img19 from '../assets/produts/19.webp'

export const productSections = [
  {
    key: 'water-purifier',
    title: 'Water Purifiers',
    subtitle: 'Home and under-sink purifiers with RO/UV/UF technologies',
    items: [
      {
        id: 'home-ro-1',
        name: 'Home RO – 8L',
        type: 'Home RO',
        capacity: '8 L',
        features: ['7-stage purification', 'Mineral guard', 'Auto shut-off', 'Wall/Counter mount'],
        image: img1,
      },
      {
        id: 'home-ro-2',
        name: 'Home RO – 10L',
        type: 'Home RO',
        capacity: '10 L',
        features: ['RO + UV + UF', 'Copper infusion', 'TDS up to 2000 ppm'],
        image: img2,
      },
      {
        id: 'under-sink-1',
        name: 'Under-sink RO – 12L',
        type: 'Under-sink RO',
        capacity: '12 L',
        features: ['Compact design', 'High flow', 'Food-grade tank'],
        image: img3,
      },
      {
        id: 'uv-uf-1',
        name: 'UV / UF Purifier',
        type: 'UV / UF',
        capacity: 'No storage',
        features: ['Chemical-free', 'Instant purification', 'Ideal for low TDS'],
        image: img4,
      },
    ],
  },
  {
    key: 'ro-plants',
    title: 'RO Plants & Other Systems',
    subtitle: 'Commercial and industrial-grade water purification systems',
    items: [
      {
        id: 'commercial-ro-1',
        name: 'Commercial RO – 25 LPH',
        type: 'Commercial RO',
        capacity: '25 LPH',
        features: ['Heavy-duty pump', 'Stainless frame', 'Low maintenance'],
        image: img5,
      },
      {
        name: 'Commercial RO – 50 / 100 / 250 LPH',
        type: 'Commercial RO',
        features: [
          'Heavy-duty design',
          'High capacity',
          'Industrial grade',
          'Continuous operation',
          'Food-grade components',
          'Low maintenance',
          'Reliable long life',
        ],
        image: img6,
      },
      {
        name: 'Industrial RO Plant',
        type: 'Industrial RO',
        features: [
          'High capacity',
          'Heavy-duty build',
          'Continuous operation',
          'Industrial-grade purification',
          'Engineered for high-demand industries',
        ],
        image: img7,
      },
      {
        name: 'Commercial UV Plant',
        type: 'UV Plant',
        features: [
          'Chemical-free disinfection',
          'High disinfection power',
          'Continuous flow',
          'Advanced UV protection',
        ],
        image: img8,
      },
    ],
  },
  {
    key: 'water-utility',
    title: 'Water & Utility Solutions',
    subtitle: 'Solutions for homes, institutions, and commercial spaces',
    items: [
      {
        name: 'Water ATM',
        type: 'Water Solution',
        features: ['24×7 water supply', 'Smart operation', 'High purification', 'Public drinking solution'],
        image: img9,
      },
      {
        name: 'Water Softener',
        type: 'Softening System',
        features: ['Hardness removal', 'Scale protection', 'Better water quality', 'Long equipment life'],
        image: img10,
      },
      {
        name: 'Water Cooler',
        type: 'Cooling',
        features: ['Instant cooling', 'Energy efficient', 'Hygienic design', 'Reliable performance'],
        image: img11,
      },
      {
        name: 'Water Ionizer',
        type: 'Ionizer',
        features: ['Alkaline water', 'Antioxidant rich', 'Advanced filtration', 'Healthy hydration'],
        image: img12,
      },
      {
        name: 'Water Dispenser',
        type: 'Dispenser',
        features: ['Hot & cold water', 'Sleek design', 'Energy efficient', 'Easy operation'],
        image: img13,
      },
      {
        name: 'Air Purifier',
        type: 'Air',
        features: ['HEPA filtration', 'Removes dust & odor', 'Clean indoor air', 'Healthy living'],
        image: img14,
      },
      {
        name: 'Home Appliances',
        type: 'Appliances',
        features: ['Smart & energy efficient', 'Durable', 'Modern living solutions'],
        image: img15,
      },
    ],
  },
  {
    key: 'treatment-plants',
    title: 'Water Treatment Plants',
    subtitle: 'Large-scale water treatment solutions for industries and municipalities',
    items: [
      {
        name: 'WTP Plant',
        type: 'WTP',
        features: ['Large-scale purification', 'Continuous operation', 'Industrial & municipal use', 'Safe drinking water'],
        image: img16,
      },
      {
        name: 'STP Plant',
        type: 'STP',
        features: ['Effluent treatment', 'Eco-friendly', 'Sustainable wastewater management'],
        image: img17,
      },
      {
        name: 'Turnkey Water Treatment Project',
        type: 'Turnkey Project',
        features: ['Complete solution', 'Design to commissioning', 'Customizable for industries'],
        image: img18,
      },
      {
        name: 'DM Plant',
        type: 'DM',
        features: ['High-purity water', 'Industrial & laboratory use', 'Precision deionization'],
        image: img19,
      },
    ],
  },
]

export default productSections
