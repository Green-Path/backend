// Define an array of JSON objects representing appliances
const appliances = [
    {
      name: 'Refrigerator',
      price: 800,
      powerRating: 4,
      imageUrl: 'https://example.com/refrigerator.jpg'
    },
    {
      name: 'Washing Machine',
      price: 600,
      powerRating: 3,
      imageUrl: 'https://example.com/washing-machine.jpg'
    },
    {
      name: 'Microwave Oven',
      price: 200,
      powerRating: 2,
      imageUrl: 'https://example.com/microwave-oven.jpg'
    },
    {
        name: 'Example Machine',
        price: 400,
        powerRating: 5,
        imageUrl: 'sampleurl.jpg'
    }
  ];
  
  // Function to filter appliances based on price range and sort by decreasing power rating
  function filterAndSortAppliances(minPrice, maxPrice) {
    const filteredAppliances = appliances.filter(appliance => appliance.price >= minPrice && appliance.price <= maxPrice);
    const sortedAppliances = filteredAppliances.sort((a, b) => b.powerRating - a.powerRating);
    return sortedAppliances;
  }
  
module.exports = filterAndSortAppliances;
  

