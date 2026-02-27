import { Product } from '@/types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: '2019 Cabernet Sauvignon',
    price: 10.0,
    description: 'A bold red with notes of dark cherry and oak.',
    image: 'https://placehold.co/400x600/800020/FFFFFF.jpg?text=Cabernet',
  },
  {
    id: 'p2',
    name: '2021 Chardonnay',
    price: 25.0,
    description: 'Crisp and refreshing with hints of apple.',
    image: 'https://placehold.co/400x600/F4E07C/000000.jpg?text=Chardonnay',
  },
  {
    id: 'p3',
    name: '2020 Pinot Noir',
    price: 50.0,
    description: 'Elegant and smooth with a silky finish.',
    image: 'https://placehold.co/400x600/58181F/FFFFFF.jpg?text=Pinot+Noir',
  },
  {
    id: 'p4',
    name: 'Sparkling Rosé',
    price: 100.0,
    description: 'Bubbly and bright, perfect for celebrations.',
    image: 'https://placehold.co/400x600/FFB7C5/000000.jpg?text=Rosé',
  },
];
