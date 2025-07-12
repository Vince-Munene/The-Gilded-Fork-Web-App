import { useState, useEffect } from 'react';

const FullMenu = ({ setPage, activeCategory = 'starters' }) => {
  const [currentCategory, setCurrentCategory] = useState(activeCategory);

  useEffect(() => {
    setCurrentCategory(activeCategory);
    // Scroll to the active category section
    const element = document.getElementById(activeCategory);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeCategory]);

  const menuItems = {
    starters: [
      { name: "Crispy Salt and Pepper Calamari", description: "Tender calamari lightly fried with a salt and pepper coating, served with a zesty lemon-dill aioli for dipping.", image: "/assets/crispy-calamari.jpg" },
      { name: "Burrata & Prosciutto Salad", description: "Creamy burrata cheese and thinly sliced prosciutto di Parma with fresh arugula, grilled peaches, and a drizzle of aged balsamic glaze.", image: "/assets/buratta-prosclutto-salad.jpg" },
      { name: "Roasted Tomato and Basil Soup", description: "A rich and creamy soup made from slow-roasted vine tomatoes and fresh basil, finished with a swirl of crème fraîche and garlic croutons.", image: "/assets/roasted-basil-tomato-soup.jpg" },
      { name: "Saffron & Mozzarella Arancini", description: "Golden-fried saffron risotto balls filled with molten mozzarella, served on a bed of spicy arrabbiata sauce.", image: "/assets/saffron-mozarella-arancini.jpg" },
      { name: "Pan-Seared Scallops", description: "Perfectly seared scallops served with a smooth sweet corn purée, crispy prosciutto, and a brown butter vinaigrette.", image: "/assets/pan-seared-scallops.jpg" },
      { name: "Beef Carpaccio", description: "Thinly sliced raw beef tenderloin drizzled with olive oil, topped with rocket, capers, shaved Parmesan, and a delicate truffle aioli.", image: "/assets/beef-carpaccio.jpg" },
      { name: "Gourmet Chicken Wings", description: "Crispy chicken wings tossed in a sweet and spicy honey-sriracha glaze, topped with toasted sesame seeds and fresh scallions.", image: "/assets/gourmet-chicken-wings.jpg" },
      { name: "Spicy Whipped Feta Dip", description: "Creamy whipped feta cheese infused with chili and herbs, served with warm pita bread and a selection of fresh, crunchy vegetables.", image: "/assets/feta-dip.jpg" },
      { name: "Trio of Bruschetta", description: "Toasted artisan bread with three toppings: classic tomato & basil, wild mushroom & truffle oil, and whipped ricotta with honey & pistachio.", image: "/assets/trio-of-buscheta.jpg" }
    ],
    mains: [
      { name: "Pan Seared Duck Confit", description: "Slow-cooked to tender perfection and served over a bed of creamy polenta with a rich cherry and red wine reduction.", image: "/assets/pan-seared-duck-confit.jpg" },
      { name: "Ribeye Steak with Garlic Herb Butter", description: "A 12oz prime ribeye grilled to your liking, topped with melting garlic herb butter and served with parmesan truffle fries and grilled asparagus.", image: "/assets/ribeye-steak.jpg" },
      { name: "Pan-Seared Salmon", description: "Crispy-skin salmon served on a bed of quinoa with roasted seasonal vegetables and a bright lemon-butter sauce.", image: "/assets/pan-seared-salmon.jpg" },
      { name: "Braised Short Rib Ragu", description: "Slow-braised beef short rib in a rich tomato and red wine sauce, tossed with fresh pappardelle pasta and topped with shaved pecorino.", image: "/assets/braised-short-rib.jpg" },
      { name: "Mushroom & Truffle Risotto", description: "A rich and creamy Arborio risotto with wild mushrooms, black truffle shavings, and aged Parmesan cheese.", image: "/assets/mushroom-truffle-risotto.jpg" },
      { name: "Herb-Roasted Half Chicken", description: "A succulent half chicken roasted with herbs, served with creamy mashed potatoes, sautéed green beans, and a natural pan jus.", image: "/assets/herb-roasted-chicken.jpg" },
      { name: "Grilled Porkchop with Apple-Cider Glaze", description: "A thick-cut bone-in pork chop, grilled and finished with a sweet and tangy apple-cider glaze. Served with sweet potato mash and sautéed spinach.", image: "/assets/grilled-porkchop-with-apple-cider.jpg" },
      { name: "Spicy Coconut Curry", description: "A vibrant, plant-based curry with chickpeas, sweet potatoes, and spinach in a fragrant coconut broth, served with jasmine rice and a wedge of lime.", image: "/assets/spicy-coconut-curry.jpg" },
      { name: "The Gilded Fork Steak Fries", description: "A perfectly grilled 8oz filet mignon, topped with a savory herb compound butter and served with a side of crisp, golden fries.", image: "/assets/gilded-fork-steak-fries.jpg" }
    ],
    desserts: [
      { name: "New York Cheesecake", description: "A classic, dense, and creamy cheesecake with a graham cracker crust, topped with a house-made mixed berry compote.", image: "/assets/new-york-cheesecake.jpg" },
      { name: "Chocolate & Salted Caramel Tart", description: "A crisp chocolate pastry shell filled with a decadent salted caramel and topped with a smooth chocolate ganache.", image: "/assets/chocolate-salted-caramel-tart.jpg" },
      { name: "Molten Chocolate Lava Cake", description: "A rich, dark chocolate cake with a warm, gooey center, served with a scoop of vanilla bean ice cream and a dusting of cocoa powder.", image: "/assets/molten-lava-cake.jpg" },
      { name: "Classic Tiramisu", description: "Layers of coffee-soaked ladyfingers and a delicate mascarpone cream, generously dusted with dark cocoa powder.", image: "/assets/classic-tiramisu.jpg" },
      { name: "Deconstructed Lemon Tart", description: "A vibrant lemon curd served alongside buttery shortbread crumbles, toasted meringue kisses, and a touch of fresh raspberry coulis.", image: "/assets/deconstructed-lemon-tart.jpg" },
      { name: "Apple & Blackberry Crumble", description: "Warm, sweet apples and tart blackberries baked under a crunchy oat crumble topping, served with a scoop of cinnamon ice cream.", image: "/assets/apple-and-blackberry-crumble.jpg" },
      { name: "Salted Caramel Budino", description: "A silky, Italian-style pudding with layers of rich caramel, topped with a sprinkle of sea salt and a delicate dollop of whipped cream.", image: "/assets/salted-caramel-budino.jpg" },
      { name: "Lemon & Lavender Panna Cotta", description: "A silky smooth, chilled Italian cream dessert subtly infused with lemon zest and a hint of lavender.", image: "/assets/lemon-lavender-panna-cotta.jpg" },
      { name: "Sticky Toffee Pudding", description: "A wonderfully moist date sponge cake drenched in a warm, rich butterscotch sauce and served with a dollop of clotted cream.", image: "/assets/sticky-toffee-pudding.jpg" }
    ],
    drinks: [
      { name: "Rosemary & Grapefruit Soda", description: "A refreshing, non-alcoholic house-made soda with fresh grapefruit juice and a rosemary-infused simple syrup.", image: "/assets/rosemary-and-grapefruit.jpg" },
      { name: "Spicy Margarita", description: "Tequila, fresh lime juice, and agave nectar, shaken with a muddled jalapeño for a kick and served with a chili-salt rim.", image: "/assets/spicy-margarita.jpg" },
      { name: "The Lavender Haze", description: "A beautifully layered cocktail featuring Empress 1908 Gin, fresh lemon juice, and a house-made lavender honey syrup.", image: "/assets/lavender-haze.jpg" },
      { name: "Espresso Martini", description: "A sophisticated blend of premium vodka, fresh espresso, and coffee liqueur, shaken until frosty and smooth.", image: "/assets/espresso-martini.jpg" },
      { name: "Smoked Rosemary Old Fashioned", description: "A classic Old Fashioned made with small-batch bourbon, aromatic bitters, and served over a single large ice cube with a smoked rosemary sprig.", image: "/assets/the-smoked-rosemary.jpg" },
      { name: "Fresh Mint Lemonade", description: "Our classic house-made lemonade muddled with fresh mint leaves for a cool, invigorating twist.", image: "/assets/fresh-mint-lemonade.jpg" },
      { name: "The Gilded Spritz", description: "A refreshing blend of Aperol, prosecco, and a hint of elderflower liqueur, garnished with a fresh orange twist.", image: "/assets/the-gilded-spritz.jpg" },
      { name: "House Cabernet Savvingnon", description: "A full-bodied red from the Napa Valley with notes of dark cherry, plum, and a hint of oak. Available by the glass or bottle.", image: "/assets/house-cabernet-savvingnon.jpg" },
      { name: "Premium Tea Selection", description: "A curated selection of high-quality black, green, and herbal teas, served hot in a personal pot.", image: "/assets/premium-tea-selection.jpg" }
    ]
  };

  const scrollToCategory = (category) => {
    setCurrentCategory(category);
    const element = document.getElementById(category);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAFADE] flex flex-col items-center justify-start pt-12">
      <div className="w-full max-w-6xl px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold font-jaro text-center">Our Menu</h2>
          <button 
            onClick={() => setPage('home')} 
            className="bg-paleyellow px-4 py-2 rounded-lg font-bold hover:bg-yellow-200 transition-colors"
          >
            Back to Home
          </button>
        </div>

        <div id="starters" className="mb-12">
          <h3 className="text-2xl font-bold font-jaro mb-6 text-center">Starters</h3>
          <div className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8">
            {menuItems.starters.map((item, index) => (
              <div key={index} className="text-center max-w-72 bg-white p-6 rounded-2xl h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="rounded-2xl w-60 h-44 mb-4"
                />
                <h4 className="font-jaro text-xl font-bold mb-2">{item.name}</h4>
                <p className="font-inder text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="mains" className="mb-12">
          <h3 className="text-2xl font-bold font-jaro mb-6 text-center">Mains</h3>
          <div className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8">
            {menuItems.mains.map((item, index) => (
              <div key={index} className="text-center max-w-72 bg-white p-6 rounded-2xl h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="font-jaro text-xl font-bold mb-2">{item.name}</h4>
                <p className="font-inder text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="desserts" className="mb-12">
          <h3 className="text-2xl font-bold font-jaro mb-6 text-center">Desserts</h3>
          <div className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8">
            {menuItems.desserts.map((item, index) => (
              <div key={index} className="text-center max-w-72 bg-white p-6 rounded-2xl h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="font-jaro text-xl font-bold mb-2">{item.name}</h4>
                <p className="font-inder text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="drinks" className="mb-12">
          <h3 className="text-2xl font-bold font-jaro mb-6 text-center">Drinks</h3>
          <div className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8">
            {menuItems.drinks.map((item, index) => (
              <div key={index} className="text-center max-w-72 bg-white p-6 rounded-2xl h-full">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />
                <h4 className="font-jaro text-xl font-bold mb-2">{item.name}</h4>
                <p className="font-inder text-black">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
