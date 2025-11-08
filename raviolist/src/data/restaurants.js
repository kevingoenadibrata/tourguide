export const restaurants = [
  // San Francisco
  {
    id: 1,
    name: "Mama's Italian Kitchen",
    city: "San Francisco",
    cuisine: "Italian",
    address: "1234 North Beach St, San Francisco, CA 94133",
    coordinates: "37.8024,-122.4058",
    rating: 4.5,
    review: "A cozy family-owned Italian restaurant serving authentic homemade pasta. The warm atmosphere and generous portions make this a neighborhood favorite. Their recipes have been passed down through three generations.",
    recommendedDishes: [
      "Handmade Fettuccine Alfredo",
      "Osso Buco with Risotto Milanese",
      "Tiramisu (house specialty)",
      "Margherita Pizza with San Marzano tomatoes"
    ]
  },
  {
    id: 2,
    name: "Tokyo Ramen House",
    city: "San Francisco",
    cuisine: "Japanese",
    address: "567 Japantown Plaza, San Francisco, CA 94115",
    coordinates: "37.7852,-122.4306",
    rating: 4.7,
    review: "Exceptional ramen shop featuring rich tonkotsu broth simmered for 18 hours. The noodles are made fresh daily, and the chashu pork melts in your mouth. Perfect for a rainy day in the city.",
    recommendedDishes: [
      "Signature Tonkotsu Ramen",
      "Spicy Miso Ramen",
      "Gyoza (pan-fried dumplings)",
      "Karaage Chicken"
    ]
  },
  {
    id: 3,
    name: "The Golden Taco",
    city: "San Francisco",
    cuisine: "Mexican",
    address: "890 Mission St, San Francisco, CA 94103",
    coordinates: "37.7805,-122.4094",
    rating: 4.3,
    review: "Vibrant taqueria bringing authentic flavors from Oaxaca. Fresh ingredients, homemade tortillas, and incredible salsa bar. The al pastor is cooked on a traditional vertical spit and is absolutely divine.",
    recommendedDishes: [
      "Al Pastor Tacos with pineapple",
      "Carnitas Burrito",
      "Elote (Mexican street corn)",
      "Horchata (homemade rice drink)"
    ]
  },
  {
    id: 4,
    name: "Spice Trail",
    city: "San Francisco",
    cuisine: "Indian",
    address: "456 Polk St, San Francisco, CA 94102",
    coordinates: "37.7833,-122.4167",
    rating: 4.6,
    review: "Modern Indian cuisine with a California twist. The chef combines traditional spices with local seasonal ingredients. Don't miss their lunch buffet on weekdays - it's an incredible value with outstanding variety.",
    recommendedDishes: [
      "Butter Chicken with garlic naan",
      "Lamb Rogan Josh",
      "Palak Paneer (spinach with cottage cheese)",
      "Mango Lassi"
    ]
  },
  {
    id: 5,
    name: "Le Petit Bistro",
    city: "San Francisco",
    cuisine: "French",
    address: "789 Union St, San Francisco, CA 94133",
    coordinates: "37.7997,-122.4186",
    rating: 4.8,
    review: "Charming French bistro with intimate ambiance and impeccable service. The chef trained in Lyon and brings authentic techniques to every dish. Perfect for a romantic dinner or special celebration.",
    recommendedDishes: [
      "Coq au Vin",
      "Duck Confit with pommes sarladaises",
      "French Onion Soup",
      "Crème Brûlée"
    ]
  },
  {
    id: 6,
    name: "Bay Seafood Grill",
    city: "San Francisco",
    cuisine: "Seafood",
    address: "321 Fisherman's Wharf, San Francisco, CA 94133",
    coordinates: "37.8080,-122.4177",
    rating: 4.4,
    review: "Fresh seafood with stunning bay views. The daily catch is displayed on ice, and you can choose exactly what you want. Their clam chowder in a sourdough bread bowl is a San Francisco classic that lives up to the hype.",
    recommendedDishes: [
      "Dungeness Crab (seasonal)",
      "Clam Chowder in sourdough bread bowl",
      "Grilled Pacific Salmon",
      "Cioppino (seafood stew)"
    ]
  },

  // New York
  {
    id: 7,
    name: "Brooklyn Pizza Palace",
    city: "New York",
    cuisine: "Italian",
    address: "123 Bedford Ave, Brooklyn, NY 11249",
    coordinates: "40.7128,-74.0060",
    rating: 4.6,
    review: "Classic New York-style pizza with thin, crispy crust and generous toppings. This family-run pizzeria has been serving the neighborhood for over 30 years. The coal-fired oven creates the perfect char on every slice.",
    recommendedDishes: [
      "Classic Margherita Pizza",
      "Pepperoni with hot honey",
      "Grandma's Sicilian Square",
      "Garlic Knots"
    ]
  },
  {
    id: 8,
    name: "Yankee Steakhouse",
    city: "New York",
    cuisine: "American",
    address: "456 Park Ave, New York, NY 10022",
    coordinates: "40.7589,-73.9851",
    rating: 4.7,
    review: "Premium steakhouse offering dry-aged beef and an extensive wine collection. The elegant atmosphere and impeccable service make it perfect for business dinners and special occasions. Their 40-day aged ribeye is legendary.",
    recommendedDishes: [
      "40-day Dry-Aged Ribeye",
      "Bone-in Filet Mignon",
      "Lobster Mac & Cheese",
      "Classic Caesar Salad tableside"
    ]
  },
  {
    id: 9,
    name: "Chinatown Dumpling House",
    city: "New York",
    cuisine: "Chinese",
    address: "789 Mott St, New York, NY 10013",
    coordinates: "40.7178,-73.9978",
    rating: 4.5,
    review: "Authentic Shanghainese restaurant known for their soup dumplings and hand-pulled noodles. Watch the chefs prepare dumplings through the window - it's an art form. The lunch specials are incredibly affordable and delicious.",
    recommendedDishes: [
      "Soup Dumplings (Xiao Long Bao)",
      "Scallion Pancakes",
      "Dan Dan Noodles",
      "Peking Duck (order ahead)"
    ]
  },

  // Tokyo
  {
    id: 10,
    name: "Sushi Zen",
    city: "Tokyo",
    cuisine: "Japanese",
    address: "1-2-3 Ginza, Chuo-ku, Tokyo 104-0061",
    coordinates: "35.6762,139.6503",
    rating: 4.9,
    review: "Michelin-starred sushi restaurant offering an unforgettable omakase experience. The chef sources fish daily from Tsukiji Market and has perfected the art of sushi over 30 years. Reservations required weeks in advance.",
    recommendedDishes: [
      "Omakase Chef's Selection",
      "Toro (fatty tuna)",
      "Sea urchin (Uni)",
      "Tamago (sweet egg)"
    ]
  },
  {
    id: 11,
    name: "Tempura Takahashi",
    city: "Tokyo",
    cuisine: "Japanese",
    address: "4-5-6 Shinjuku, Shinjuku-ku, Tokyo 160-0022",
    coordinates: "35.6938,139.7036",
    rating: 4.7,
    review: "Traditional tempura house where each piece is fried to perfection and served immediately. The light, crispy batter allows the natural flavors of premium ingredients to shine. Sit at the counter to watch the master at work.",
    recommendedDishes: [
      "Assorted Tempura Course",
      "King Prawn Tempura",
      "Seasonal Vegetable Tempura",
      "Tendon (tempura rice bowl)"
    ]
  },
  {
    id: 12,
    name: "Ramen Ichiban",
    city: "Tokyo",
    cuisine: "Japanese",
    address: "7-8-9 Shibuya, Shibuya-ku, Tokyo 150-0002",
    coordinates: "35.6595,139.7004",
    rating: 4.6,
    review: "Bustling ramen shop serving rich, flavorful broths until late night. Popular with locals and visitors alike. The tsukemen (dipping noodles) are a must-try, especially on hot summer days.",
    recommendedDishes: [
      "Shoyu Ramen",
      "Tsukemen (dipping noodles)",
      "Chashu Pork Belly Bowl",
      "Gyoza Set"
    ]
  },

  // Paris
  {
    id: 13,
    name: "Le Comptoir",
    city: "Paris",
    cuisine: "French",
    address: "9 Carrefour de l'Odeon, 75006 Paris",
    coordinates: "48.8566,2.3522",
    rating: 4.8,
    review: "Quintessential Parisian bistro serving traditional French cuisine with a modern touch. The atmosphere is lively and authentic. Their wine list features excellent small producers from across France.",
    recommendedDishes: [
      "Steak Frites with Bearnaise",
      "Escargots de Bourgogne",
      "Confit de Canard",
      "Tarte Tatin"
    ]
  },
  {
    id: 14,
    name: "Boulangerie Moderne",
    city: "Paris",
    cuisine: "French",
    address: "16 Rue des Martyrs, 75009 Paris",
    coordinates: "48.8788,2.3402",
    rating: 4.7,
    review: "Award-winning bakery and cafe serving the best croissants in Paris. Arrive early as the most popular items sell out by mid-morning. The pain au chocolat and almond croissants are legendary.",
    recommendedDishes: [
      "Butter Croissant",
      "Pain au Chocolat",
      "Almond Croissant",
      "Quiche Lorraine"
    ]
  }
];

// Helper function to get all unique cities
export const getCities = () => {
  const citySet = new Set(restaurants.map(r => r.city));
  return Array.from(citySet).sort();
};

// Helper function to get restaurants by city
export const getRestaurantsByCity = (cityName) => {
  return restaurants.filter(r => r.city === cityName);
};

// Helper function to get city stats
export const getCityStats = () => {
  const cities = getCities();
  return cities.map(city => {
    const cityRestaurants = getRestaurantsByCity(city);
    const avgRating = cityRestaurants.reduce((sum, r) => sum + r.rating, 0) / cityRestaurants.length;
    const cuisines = new Set(cityRestaurants.map(r => r.cuisine));

    return {
      name: city,
      restaurantCount: cityRestaurants.length,
      avgRating: avgRating.toFixed(1),
      cuisines: Array.from(cuisines)
    };
  });
};
