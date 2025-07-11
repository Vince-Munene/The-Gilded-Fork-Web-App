export default function SigDishes() {
  return (
    <div id="signature-dishes">
      <div className="text-center p-6 bg-paleyellow">
        <h4 className="font-jaro text-4xl">Signature Dishes</h4>
      </div>

      <div
        className="flex flex-wrap flex-row justify-between px-14 py-8 gap-8 bg-paleyellow"
      >
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/pan-seared-duck-confit.jpg"
            alt="Pan Seared Duck Confit"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Pan Seared Duck Confit</h4>
          <p className="font-inder">
            Slow-cooked to tender perfection and served over a bed of creamy
            polenta with a rich cherry and red wine reduction.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/mushroom-truffle-risotto.jpg"
            alt="Mushroom & Truffle Risotto"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Mushroom & Truffle Risotto</h4>
          <p className="font-inder">
            A rich and creamy Arborio risotto with wild mushrooms, black truffle
            shavings, and aged Parmesan cheese.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/gilded-fork-steak-fries.jpg"
            alt="The Gilded Fork Steak Fries"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">The Gilded Fork Steak Fries</h4>
          <p className="font-inder">
            A perfectly grilled 8oz filet mignon, topped with a savory herb
            compound butter and served with a side of crisp, golden fries.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/deconstructed-lemon-tart.jpg"
            alt="Deconstructed Lemon Tart"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Deconstructed Lemon Tart</h4>
          <p className="font-inder">
            A vibrant lemon curd served alongside buttery shortbread crumbles,
            toasted meringue kisses, and a touch of fresh raspberry coulis.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/molten-lava-cake.jpg"
            alt="Molten Chocolate Lava Cake"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Molten Chocolate Lava Cake</h4>
          <p className="font-inder">
            A rich, dark chocolate cake with a warm, gooey center, served with a
            scoop of vanilla bean ice cream and a dusting of cocoa powder.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/salted-caramel-budino.jpg"
            alt="Salted Caramel Budino"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Salted Caramel Budino</h4>
          <p className="font-inder">
            A silky, Italian-style pudding with layers of rich caramel, topped
            with a sprinkle of sea salt and a delicate dollop of whipped cream.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/the-gilded-spritz.jpg"
            alt="The Gilded Spritz"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">The Gilded Spritz</h4>
          <p className="font-inder">
            A refreshing blend of Aperol, prosecco, and a hint of elderflower
            liqueur, garnished with a fresh orange twist
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/the-smoked-rosemary.jpg"
            alt="Smoked Rosemary Old Fashioned"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Smoked Rosemary Old Fashioned</h4>
          <p className="font-inder">
            A classic Old Fashioned made with small-batch bourbon, aromatic
            bitters, and served over a single large ice cube with a smoked
            rosemary sprig.
          </p>
        </div>
        <div className="text-center max-w-72 bg-white p-6 rounded-2xl">
          <img
            src="/assets/lavender-haze.jpg"
            alt="Lavender Haze"
            className="rounded-2xl w-60 h-44"
          />
          <h4 className="font-jaro text-2xl">Lavender Haze</h4>
          <p className="font-inder">
            A beautifully layered cocktail featuring Empress 1908 Gin, fresh
            lemon juice, and a house-made lavender honey syrup.
          </p>
        </div>
      </div>
    </div>
  );
}