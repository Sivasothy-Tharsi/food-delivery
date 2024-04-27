import icons from "./icons"
import images from "./images"

export default {
  "products": [
    {
      "id": 1,
      "name": "Burger",
      "category": "Burger",
      "description": "Chicken with Cheese",
      "image": images.burger1,
      "price": {
        "small": "Rs 40",
        "medium": "Rs 50",
        "large": "Rs 60"
      },
      "rating": 4.5,
      "reviews": 120,
      "isBookmarks": true,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Enjoy the succulent taste of our Chicken with Cheese Burger. Tender chicken patty layered with melted cheese, crisp lettuce, fresh tomato, and creamy mayonnaise, all sandwiched between soft burger buns. Savor this classic favorite for a satisfying meal anytime.",
      "cookingTime" : "15 min"
    },
    {
      "id": 2,
      "name": "Pizza",
      "category": "Pizza",
      "description": "Classic Pizza",
      "image": images.pizza,
      "price": {
        "small": "Rs 8",
        "medium": "Rs 10",
        "large": "Rs 12"
      },
      "rating": 4.8,
      "reviews": 234,
      "isBookmarks": true,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Indulge in the timeless delight of our Classic Pizza. Savory tomato sauce, gooey mozzarella cheese, and your choice of toppings, all baked to perfection on a crispy crust. Whether you're a fan of pepperoni, veggies, or Hawaiian, there's a slice for everyone to enjoy.",
      "cookingTime" : "25 min"
    },
    {
      "id": 3,
      "name": "Sandwich",
      "category": "Sandwich",
      "description": "Double Chicken",
      "image": images.sandwitch,
      "price": {
        "small": "Rs 25",
        "medium": "Rs 30",
        "large": "Rs 35"
      },
      "rating": 4.0,
      "reviews": 85,
      "isBookmarks": true,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Treat yourself to our Double Chicken Sandwich, packed with flavor and protein. Grilled chicken breast slices, crispy bacon, fresh lettuce, and juicy tomatoes, all layered between toasted bread slices and dressed with your choice of sauces. A hearty meal for any occasion.",
      "cookingTime" : "10 min"
    },
    {
      "id": 4,
      "name": "Dhosai",
      "category": "Dhosai",
      "description": "Dhosai with Sampol",
      "image": images.dhosai,
      "price": {
        "small": "Rs 25",
        "medium": "Rs 30",
        "large": "Rs 35"
      },
      "rating": 4.0,
      "reviews": 85,
      "isBookmarks": false,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Savor the authentic taste of South India with our Dhosai with Sampol. Made from fermented rice and lentil batter, these crispy pancakes are served with flavorful coconut chutney and spicy sambar. A delightful dish for breakfast or any time of the day.",
      "cookingTime" : "20 min"
    },
    {
      "id": 5,
      "name": "Burger",
      "category": "Burger",
      "description": "Chicken with Cheese",
      "image": images.burger2,
      "price": {
        "small": "Rs 40",
        "medium": "Rs 50",
        "large": "Rs 60"
      },
      "rating": 4.5,
      "reviews": 120,
      "isBookmarks": true,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Sink your teeth into another Chicken with Cheese Burger delight. Made with the same care and quality ingredients as our original, this burger features a succulent chicken patty, gooey melted cheese, crisp veggies, and creamy sauces. A delicious choice for burger lovers.",
      "cookingTime" : "15 min"
    },
    {
      "id": 6,
      "name": "Pizza",
      "category": "Pizza",
      "description": "Classic Pizza",
      "image": images.pizza,
      "price": {
        "small": "Rs 8",
        "medium": "Rs 10",
        "large": "Rs 12"
      },
      "rating": 4.8,
      "reviews": 234,
      "isBookmarks": true,
      "sizes": [
        "Small",
        "Medium",
        "Large"
      ],
      "detailDescription": "Relish the familiar taste of our Classic Pizza, available in small, medium, and large sizes. Crafted with premium ingredients and baked to perfection, our pizzas are a crowd-pleaser for any occasion. From cheese lovers to meat enthusiasts, there's something for everyone.",
      "cookingTime" : "30 min"
    }
    
  ],

  "offers": [
    {
      "id": 1,
      "itemName": "Seafood Soup",
      "description": "Special deal.",
      "discount": "50% Off",
      "image": images.seafoodSoup
    },
    {
      "id": 2,
      "itemName": "Pizza",
      "description": "Special deal",
      "discount": "20% odd",
      "image": images.pizza
    },
    {
      "id": 3,
      "itemName": "Noodless",
      "description": "Classic noodles.",
      "discount": "30% Off",
      "image": images.noodless
    }
  ],

  "categories": [
    {
      "id": 1,
      "name": "Burger",
      "icon": icons.burger
    },
    {
      "id": 2,
      "name": "Pizza",
      "icon": icons.pizza
    },
    {
      "id": 3,
      "name": "Submarine",
      "icon": icons.submarine
    },
    {
      "id": 4,
      "name": "Pasta",
      "icon": icons.burger
    }
  ],
  "reviews": [
    {
      "id": 1,
      "userName": "John Doe",
      "rating": 5,
      "comment": "John Doe had an exceptional dining experience. The food quality exceeded expectations, and the flavors were delightful. The service was impeccable, making the entire meal enjoyable. Highly recommended for anyone looking for a top-notch culinary experience.",
      "date": "2024-04-28"
    },
    {
      "id": 2,
      "userName": "Jane Smith",
      "rating": 4,
      "comment": "Jane Smith was impressed with the food quality and taste. While the service was good, there were minor areas for improvement. Overall, it was a satisfying dining experience and worth revisiting.",
      "date": "2024-04-27"
    },
    {
      "id": 3,
      "userName": "Mike Johnson",
      "rating": 3,
      "comment": "Mike Johnson found the food to be average, with nothing particularly outstanding. The service was adequate but lacked the personal touch expected from a dining establishment. While not a bad experience, there are better options available.",
      "date": "2024-04-26"
    }
  ]


}



