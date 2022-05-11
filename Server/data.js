// Placeholder search results

const cakes = [
    {id: 1 , link: 'https://www.bbcgoodfood.com/recipes/collection/classic-cake-recipes', title: 'Classic cake recipes | BBC Good Food', description: 'Old favourites, traditional bakes and new flavours – take your pick from our timeless collection of layered, fruit and the most indulgent chocolate cakes.', favicon:'https://www.bbcgoodfood.com/favicon.ico'},
    {id: 2 , link: 'https://sallysbakingaddiction.com/category/desserts/cakes/', title: 'Cakes - Sally\'s Baking Addiction', description: 'My team and I firmly believe that it isn’t a celebration without cake. Here you’ll find over 120 different cake recipes to browse from White Cake and Pumpkin Cake to Lava Cakes and Pudding Cakes. The from-scratch cake recipes on this page also include reader favorite Vanilla Cake, rich Chocolate Cake, perfect Pound Cake, Bundt cakes, one layer cakes, and so much more.', favicon: 'https://sallysbakingaddiction.com/wp-content/uploads/2022/01/cakes.svg'},
    {id: 3 , link: 'https://en.wikipedia.org/wiki/Cake', title: 'Cake - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 4 , link: 'https://www.bbc.co.uk/food/cake', title: 'Cake recipes - BBC Food', description: 'Browse our easy cake recipes: from birthday cakes, chocolate cakes and lemon drizzle cakes to the perfect Victoria sponge - not forgetting plenty of gluten-free options.', favicon:'https://www.bbc.co.uk/favicon.ico'},
    {id: 5 , link: 'https://www.deliciousmagazine.co.uk/collections/easy-cake-recipes/', title: '56 Easy cake recipes - delicious. magazine', description: 'Baking doesn\'t have to be complicated. With our easy recipes you can wow friends and family with these tasty baked treats.', favicon:'https://www.deliciousmagazine.co.uk/favicon.ico'},
    {id: 6 , link: 'https://www.allrecipes.com/recipe/6874/best-ever-muffins/', title: 'Best Ever Muffins Recipe | Allrecipes', description: 'This recipe can be your starting point for a wide array of sweet and savory muffins, depending on what you decide to add. You can choose blueberries or Cheddar, for instance. It\'s up to you.', favicon:'https://www.allrecipes.com/img/favicons/favicon-32.png'},
    {id: 7 , link: 'https://en.wikipedia.org/wiki/Cake_(2014_film)', title: 'Cake (2014 film) - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 8 , link: 'https://www.paul-uk.com/cakes', title: 'Cake Delivery in London, UK | Order PAUL\'s Cakes Online', description: 'Find a Paul near you and make an order for next day cake delivery in London, UK! Personalise your own cake or choose from our range of birthday and other cakes!', favicon:'https://www.paul-uk.com/media/favicon/websites/1/favicon.ico'},
    {id: 9 , link: 'https://www.tesco.com/groceries/en-GB/shop/bakery/cakes-cake-bars-slices-and-pies/birthday-and-celebration-cakes/all', title: 'Birthday & Celebration Cakes For Kids & Adults - Tesco Groceries', description: 'Buy delicious Birthday & Celebration Cakes at Tesco. Shop in store & online & earn Clubcard points. Delivery 7 days a week. Browse the Tesco Bakery range.', favicon:'https://www.tesco.com/groceries/web-assets/touch-icons/tesco/favicon-9636e8991a.png'},
    {id: 10 , link: 'https://www.bbc.co.uk/food/muffins', title: 'Muffins recipes - BBC Food', description: 'Whip up a batch of tempting muffins from our easy recipes. Take your pick from blueberry muffins, banana muffins or even lemon drizzle muffins. They\'re delicious as an on-the-go breakfast or an afternoon treat - or both!', favicon:'https://www.bbc.co.uk/favicon.ico'}
];

const cookies = [
    {id: 1 , link: 'https://www.bbcgoodfood.com/recipes/collection/cookie-recipes', title: '', description: '', favicon:''},
    {id: 2 , link: 'https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies', title: '', description: '', favicon:''},
    {id: 3 , link: 'https://en.wikipedia.org/wiki/Cookie', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 4 , link: 'https://en.wikipedia.org/wiki/HTTP_cookie', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 5 , link: 'https://ico.org.uk/your-data-matters/online/cookies/', title: '', description: '', favicon:''},
    {id: 6 , link: 'https://www.gov.uk/help/cookies', title: '', description: '', favicon:''},
    {id: 7 , link: 'https://www.jamieoliver.com/recipes/beautiful-baking/cookie/', title: '', description: '', favicon:''},
    {id: 8 , link: 'https://wickedcookies.co.uk/all-cookies/', title: '', description: '', favicon:''},
    {id: 9 , link: 'https://uk.norton.com/internetsecurity-privacy-what-are-cookies.html', title: '', description: '', favicon:''},
    {id: 10 , link: 'https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DAndroid', title: '', description: '', favicon:''}
];

const fruits = [
    {id: 1 , link: 'https://www.halfyourplate.ca/fruits-and-veggies/fruits-a-z/', title: '', description: '', favicon:''},
    {id: 2 , link: 'https://en.wikipedia.org/wiki/Fruit', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 3 , link: 'https://www.healthline.com/nutrition/healthy-fruit', title: '', description: '', favicon:''},
    {id: 4 , link: 'https://www.wcrf-uk.org/healthy-eating/food-for-thought/list-of-fruit-from-a-to-z/', title: '', description: '', favicon:''},
    {id: 5 , link: 'https://www.sainsburys.co.uk/shop/gb/groceries/fruit-veg/fresh-fruit', title: '', description: '', favicon:''},
    {id: 6 , link: 'https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/', title: '', description: '', favicon:''},
    {id: 7 , link: 'https://en.wikipedia.org/wiki/Apple', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 8 , link: 'https://en.wikipedia.org/wiki/Orange_(fruit)', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 9 , link: 'https://en.wikipedia.org/wiki/Orange_S.A.', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 10 , link: 'https://en.wikipedia.org/wiki/Pear', title: '', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'}
];

const results = {
    'cakes':cakes,
    'cookies':cookies,
    'fruits': fruits
};

module.exports = results;
