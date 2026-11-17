
import tenis1 from '../assets/tenis-1.png'
import tenis2 from '../assets/tenis-2.png'
import tenis3 from '../assets/tenis-3.png'
import tenis4 from '../assets/tenis-4.png'
import tenis5 from '../assets/tenis-5.png'
import tenis6 from '../assets/tenis-6.png'

import tenis1_1 from '../assets/tenis-1.1.png'
import tenis1_2 from '../assets/tenis-1.2.png'

import tenis2_1 from '../assets/tenis-2.1.png'
import tenis2_2 from '../assets/tenis-2.2.png'

import tenis3_1 from '../assets/tenis-3.1.png'
import tenis3_2 from '../assets/tenis-3.2.png'

import tenis4_1 from '../assets/tenis-4.1.png'
import tenis4_2 from '../assets/tenis-4.2.png'

import tenis5_1 from '../assets/tenis-5.1.png'
import tenis5_2 from '../assets/tenis-5.2.png'

import tenis6_1 from '../assets/tenis-6.1.png'
import tenis6_2 from '../assets/tenis-6.2.png'

import tenis7_1 from '../assets/tenis-7.1.png'
import tenis7_2 from '../assets/tenis-7.2.png'

import tenis8_1 from '../assets/tenis-8.1.png'
import tenis8_2 from '../assets/tenis-8.2.png'

const products = [
  {
    id: 1,
    name: 'K-Swiss V8 - Masculino',
    category: 'Tênis',
    type: 'Esporte e lazer',
    gender: 'Masculino',
    brand: 'K-Swiss',
    stars: 4.8,
    rating: 125,
    oldPrice: 200,
    price: 100,
    discount: '50% OFF',
    image: tenis1,
    images: [tenis1, tenis1_1, tenis1_2],
    description: 'Tênis esportivo masculino, desenvolvido para proporcionar conforto e estilo no dia a dia.',
  },
  {
    id: 2,
    name: 'Tênis Esportivo Casual',
    category: 'Tênis',
    type: 'Casual',
    gender: 'Unissex',
    brand: 'Nike',
    stars: 4.5,
    rating: 98,
    oldPrice: 250,
    price: 150,
    discount: '40% OFF',
    image: tenis2,
    images: [tenis2, tenis2_1, tenis2_2],
    description: 'Tênis casual ideal para o uso diário, combinando conforto e versatilidade.',
  },
  {
    id: 3,
    name: 'Tênis Running Pro',
    category: 'Tênis',
    type: 'Corrida',
    gender: 'Unissex',
    brand: 'Nike',
    stars: 4.7,
    rating: 112,
    oldPrice: 300,
    price: 180,
    discount: '40% OFF',
    image: tenis3,
    images: [tenis3, tenis3_1, tenis3_2],
    description: 'Tênis esportivo desenvolvido para atividades físicas e corridas.',
  },
  {
    id: 4,
    name: 'Tênis K-Swiss Sport',
    category: 'Tênis',
    type: 'Esporte e lazer',
    gender: 'Unissex',
    brand: 'K-Swiss',
    stars: 4.6,
    rating: 105,
    oldPrice: 220,
    price: 140,
    discount: '36% OFF',
    image: tenis4,
    images: [tenis4, tenis4_1, tenis4_2],
    description: 'Tênis com visual esportivo, conforto e praticidade para diferentes ocasiões.',
  },
  {
    id: 5,
    name: 'Tênis Street Masculino',
    category: 'Tênis',
    type: 'Casual',
    gender: 'Masculino',
    brand: 'Nike',
    stars: 4.9,
    rating: 150,
    oldPrice: 280,
    price: 190,
    discount: '32% OFF',
    image: tenis5,
    images: [tenis5, tenis5_1, tenis5_2],
    description: 'Tênis de estilo urbano, ideal para compor looks casuais.',
  },
  {
    id: 6,
    name: 'Tênis Casual Moderno',
    category: 'Tênis',
    type: 'Casual',
    gender: 'Unissex',
    brand: 'Nike',
    stars: 4.4,
    rating: 90,
    oldPrice: 200,
    price: 130,
    discount: '35% OFF',
    image: tenis6,
    images: [tenis6, tenis6_1, tenis6_2],
    description: 'Tênis moderno que combina estilo e conforto para o cotidiano.',
  },
  {
    id: 7,
    name: 'Tênis Casual Urbano',
    category: 'Tênis',
    type: 'Casual',
    gender: 'Unissex',
    brand: 'Nike',
    stars: 4.3,
    rating: 85,
    oldPrice: 250,
    price: 180,
    discount: '28% OFF',
    image: '/product-thumb-4.jpeg',
    images: ['/product-thumb-4.jpeg', tenis7_1, tenis7_2],
    description: 'Tênis casual para uso diário.',
  },
  {
    id: 8,
    name: 'Tênis Casual Essential',
    category: 'Tênis',
    type: 'Casual',
    gender: 'Unissex',
    brand: 'Nike',
    stars: 4.2,
    rating: 80,
    oldPrice: 300,
    price: 220,
    discount: '27% OFF',
    image: '/product-thumb-5.jpeg',
    images: ['/product-thumb-5.jpeg', tenis8_1, tenis8_2],
    description: 'Tênis moderno para uso diário.',
  },
]

export default products

export const trendingProducts = products
