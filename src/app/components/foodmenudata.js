import baguetteImage from '@/app/assets/menuphotos/b-baguette.jpg'
import fougasseImage from '@/app/assets/menuphotos/b-fougasse.jpg'
import quicheImage from '@/app/assets/menuphotos/b-quiche.jpg'
import briocheImage from '@/app/assets/menuphotos/b-brioche.jpg'

import croqueImage from '@/app/assets/menuphotos/l-croque.jpg'
import ratatouilleImage from '@/app/assets/menuphotos/l-ratatouille.jpg'
import saladImage from '@/app/assets/menuphotos/l-salad.jpg'
import soupImage from '@/app/assets/menuphotos/l-soup.jpg'

import bruleeImage from '@/app/assets/menuphotos/d-brulee.jpg'
import macaronImage from '@/app/assets/menuphotos/d-macaron.jpg'
import parisImage from '@/app/assets/menuphotos/d-paris.jpg'
import profImage from '@/app/assets/menuphotos/d-prof.jpg'




const MenuData = {
    bakery: [
      {
        name: "Classic Baguette",
        price: 12.00,
        description: "Crisp crust, airy crumb, pure tradition",
        img: baguetteImage,
        imgimgalt: "Four fresh baguette loaves",
        amount: 0
      },
      {
        name: "Olive Fougasse",
        price: 14.00,
        description: "Herb-infused flatbread, briny olives",
        img: fougasseImage,
        imgalt: "A fresh olive flatbread",
        amount: 0
      },
      {
        name: "Quiche Lorraine",
        price: 18.00,
        description: "Flaky pastry, smoky bacon, creamy filling",
        img: quicheImage,
        imgalt: "Sliced quiche lorraine",
        amount: 0
      },
      {
        name: "Brioche Loaf",
        price: 11.00,
        description: "Buttery, slightly sweet, golden crust",
        img: briocheImage,
        imgalt: "Fresh brioche loaf with 2 pieces pulled off",
        amount: 0
      }
    ],
    lunch: [
      {
        name: "Croque Monsieur",
        price: 19.00,
        description: "Grilled ham and cheese, béchamel, house bread",
        img: croqueImage,
        imgalt: "Cut croque sandwich with ham and cheese",
        amount: 0
      },
      {
        name: "Ratatouille Tart",
        price: 21.00,
        description: "Seasonal vegetables, herbed goat cheese",
        img: ratatouilleImage,
        imgalt: "plated ratatoille dish on a table, surrounded by vegetables",
        amount: 0
      },
      {
        name: "Niçoise Salad",
        price: 17.00,
        description: "Tuna, olives, eggs, green beans, vinaigrette",
        img: saladImage,
        imgalt: "mixed vegetables topepd with eggs and black pepper",
        amount: 0
      },
      {
        name: "Onion Soup",
        price: 15.00,
        description: "Caramelized onions, rich broth, gruyère crouton",
        img: soupImage,
        imgalt: "two cups with french onion soup",
        amount: 0
      }
    ],
    desserts: [
      {
        name: "Lavender Brûlée",
        price: 17.00,
        description: "Silky custard, lavender, caramelized sugar",
        img: bruleeImage,
        imgalt: "creme brulee topepd with lavender",
        amount: 0
      },
      {
        name: "Profiteroles",
        price: 21.00,
        description: "Choux puffs, vanilla cream, chocolate sauce",
        img: profImage,
        imgalt: "Three profitroles topped with chocolate ",
        amount: 0
      },
      {
        name: "Macarons",
        price: 15.00,
        description: "Delicate almond meringue cookies, assorted flavors",
        img: macaronImage,
        imgalt: "A dozen of macaroons of different colors",
        amount: 0
      },
      {
        name: "Paris-Brest",
        price: 18.00,
        description: "Hazelnut praline cream, choux pastry ring",
        img: parisImage,
        imgalt: "Plated Paris-Brest topped with almonds",
        amount: 0
      }
    ]
  };


export default MenuData