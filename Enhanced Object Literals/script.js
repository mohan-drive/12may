'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

  const openingHours= {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  };

// Data needed for first part of the section
const restaurant = {
  name: 'mb',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours:openingHours,//before ES6
  openingHours,//ES6 enhanced object literals

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery:function({time='11pm',mainIndex=1,starterIndex}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliverd at time of ${time}`);
  },

  

  oredrPasta:function(ing1,ing2,ing3){
    console.log(`pasta with ing1-${ing1},ing2-${ing2} and ing3-${ing3}`);
  },

  orderPizza:function(maining,...othering){
    console.log(maining,othering);
  }
};

//no need to type function in enhanced object literals