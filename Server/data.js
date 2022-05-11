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
    {id: 1 , link: 'https://www.bbcgoodfood.com/recipes/collection/cookie-recipes', title: 'Cookie recipes | BBC Good Food', description: 'Cookies make the perfect rainy afternoon treat. From gooey American chocolate chip cookies to melty shortbread, we\'ve got a selection to please everyone.', favicon:''},
    {id: 2 , link: 'https://tasty.co/recipe/the-best-chewy-chocolate-chip-cookies', title: 'The Best Chewy Chocolate Chip Cookies Recipe by Tasty', description: 'There are a few secrets to the best classic, chewy chocolate chip cookies. Number one: Don’t use chips; instead, opt for a mix of milk or semisweet and dark chocolate chunks. The second is to let the dough rest overnight or longer for a more complex, toffee-like flavor. Lastly, use an ice cream scooper to get even-sized cookies every time. And that’s it! With these little tweaks, the result is a cookie that’s textured on the outside, and soft and gooey on the inside. Absolutely perfect!', favicon:''},
    {id: 3 , link: 'https://en.wikipedia.org/wiki/Cookie', title: 'Cookie - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 4 , link: 'https://en.wikipedia.org/wiki/HTTP_cookie', title: 'HTTP cookie - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 5 , link: 'https://ico.org.uk/your-data-matters/online/cookies/', title: 'Cookies | ICO', description: '', favicon:''},
    {id: 6 , link: 'https://www.gov.uk/help/cookies', title: 'Cookies on GOV.UK	', description: '', favicon:''},
    {id: 7 , link: 'https://www.jamieoliver.com/recipes/beautiful-baking/cookie/', title: 'Cookie Recipes | Jamie Oliver', description: 'Discover Jamie Oliver\'s collection of delicious cookie recipes online today and make the perfect treat that both the kids and the adults will enjoy.', favicon:''},
    {id: 8 , link: 'https://wickedcookies.co.uk/all-cookies/', title: 'Buy Cookies Online - Over 40 Amazing Flavours Plus Gluten Free / Dairy Free', description: 'Wicked Cookies make and bake the tastiest, gooeyist cookies in the UK! Baked fresh daily and made from the very finest ingredients. Gluten & Dairy Free Cookies Available', favicon:''},
    {id: 9 , link: 'https://uk.norton.com/internetsecurity-privacy-what-are-cookies.html', title: 'What Are Cookies?', description: 'Mention “cookies,” and most people expect a treat to appear. When talking about computers, however, cookies aren’t what’s on the dessert menu. In fact, they’re not even physical objects.', favicon:''},
    {id: 10 , link: 'https://support.google.com/chrome/answer/95647?hl=en&co=GENIE.Platform%3DAndroid', title: 'Clear, enable, and manage cookies in Chrome - Android - Google Chrome Help', description: 'You can choose to delete existing cookies, allow or block all cookies, and set preferences for certain websites.What cookies areCookies are files created by websites you visit. They make your onli', favicon:''}
];

const fruits = [
    {id: 1 , link: 'https://www.halfyourplate.ca/fruits-and-veggies/fruits-a-z/', title: 'Fruits from A-Z - Half Your Plate', description: 'A comprehensive list of fruits from A-Z', favicon:''},
    {id: 2 , link: 'https://en.wikipedia.org/wiki/Fruit', title: 'Fruit - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 3 , link: 'https://www.healthline.com/nutrition/healthy-fruit', title: '20 Tasty Fruits with Health Benefits', description: 'These 20 delicious fruits are packed with many nutrients that will help you maintain your health and reduce your risk of disease.', favicon:''},
    {id: 4 , link: 'https://www.wcrf-uk.org/healthy-eating/food-for-thought/list-of-fruit-from-a-to-z/', title: 'List of fruit from A to Z | World Cancer Research Fund', description: 'From avocados to zucchini, add something unusual to your 5 A DAY with our fuit alphabet! Eating lots of fruit & veg is great for our health', favicon:''},
    {id: 5 , link: 'https://www.sainsburys.co.uk/shop/gb/groceries/fruit-veg/fresh-fruit', title: 'All Fruit Products | Sainsbury\'s', description: 'Buy from our all fruit range here at Sainsbury\'s. Choose from 1 hour delivery slots and collect Nectar points online today. Buy online today.', favicon:''},
    {id: 6 , link: 'https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/vegetables-and-fruits/', title: 'Vegetables and Fruits | The Nutrition Source | Harvard T.H. Chan School of Public Health', description: 'Vegetables and fruits are an important part of a healthy diet, and variety is as important as quantity. Learn how to increase your intake.', favicon:''},
    {id: 7 , link: 'https://en.wikipedia.org/wiki/Apple', title: 'Apple - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 8 , link: 'https://en.wikipedia.org/wiki/Orange_(fruit)', title: 'Orange (fruit) - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 9 , link: 'https://en.wikipedia.org/wiki/Orange_S.A.', title: 'Orange S.A. - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'},
    {id: 10 , link: 'https://en.wikipedia.org/wiki/Pear', title: 'Pear - Wikipedia', description: '', favicon:'https://en.wikipedia.org/static/favicon/wikipedia.ico'}
];

const results = {
    'cakes':cakes,
    'cookies':cookies,
    'fruits': fruits
};

module.exports = results;
